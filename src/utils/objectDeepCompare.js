const objectDeepCompare = (obj1, obj2) => {
    if (obj1 === obj2) {
    return true; // Strict equality for primitives, null, or same object reference
    }

    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false; // Not objects or one is null, and not strictly equal
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
    return false; // Different number of properties
    }

    for (const key of keys1) {
    if (!keys2.includes(key) || !objectDeepCompare(obj1[key], obj2[key])) {
        return false; // Key missing or values not deeply equal
    }
    }

    return true; // All checks passed, objects are deeply equal  
}

export default objectDeepCompare