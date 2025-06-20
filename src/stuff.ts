type Instance = {
    name: string;
    css: Record<string, string>;
}

type Input = Instance[];

type Node = {
    instances: string[];
    children: Node[];
    css: Record<string, string>;
}

type Output = Node[];

export function buildTree(instances: Input): Output {
    return groupInstances(instances);
}

function groupInstances(instances: Instance[]): Node[] {
    if (instances.length === 1) {
        // Only one instance, leaf node
        return [{
            instances: [instances[0].name],
            children: [],
            css: instances[0].css
        }];
    }

    // 1. Count shared properties
    const cssCount: Record<string, Record<string, number>> = {};

    for (const inst of instances) {
        for (const [key, value] of Object.entries(inst.css)) {
            const keyVal = `${key}:${value}`;
            if (!cssCount[keyVal]) cssCount[keyVal] = {};
            cssCount[keyVal][inst.name] = (cssCount[keyVal][inst.name] || 0) + 1;
        }
    }

    // 2. Find the most common shared property
    let bestKey: string | null = null;
    let maxCount = 1;

    for (const key in cssCount) {
        const count = Object.keys(cssCount[key]).length;
        if (count > maxCount) {
            maxCount = count;
            bestKey = key;
        }
    }

    if (!bestKey) {
        // No more common properties, create leaf nodes
        return instances.map(inst => ({
            instances: [inst.name],
            children: [],
            css: inst.css
        }));
    }

    const [bestProp, bestVal] = bestKey.split(':');
    const grouped: Instance[][] = [];
    const groupedMap: Record<string, Instance[]> = {};
    const others: Instance[] = [];

    for (const inst of instances) {
        if (inst.css[bestProp] === bestVal) {
            const clone = {...inst};
            clone.css = {...clone.css};
            delete clone.css[bestProp];
            (groupedMap[bestKey] = groupedMap[bestKey] || []).push(clone);
        } else {
            others.push(inst);
        }
    }

    // Create current node
    const children = groupInstances(groupedMap[bestKey]);
    const node: Node = {
        instances: children.flatMap(c => c.instances),
        children,
        css: { [bestProp]: bestVal }
    };

    // Recurse on the rest
    return [node, ...groupInstances(others)];
}
