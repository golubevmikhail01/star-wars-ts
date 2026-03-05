export const isFresh = (
    obj: { lastUpdateData?: number },
    days: number
): boolean => {
    if (!obj?.lastUpdateData) return false;
    return Date.now() - obj.lastUpdateData <= days;
}