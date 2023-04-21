import { useState, useMemo } from 'react';

import { IUseArrayActions } from './useArray.interface';

function useArray<T>(initialValue: T[]): IUseArrayActions<T> {
    const [value, setValue] = useState<T[]>(initialValue);
    const length = useMemo(() => value.length, [value]);

    function push(elements: T) {
        setValue((a: T[]) => [...a, elements]);
    }

    function unshift(elements: T) {
        setValue((a: T[]) => [elements, ...a]);
    }

    function filter(callback: (e: T) => boolean) {
        setValue((a: T[]) => a.filter(callback));
    }

    function findById(id: string | number, idLabel: string = 'id') {
        //@ts-ignore
        return value.find((e: T) => e[idLabel] === id);
    }

    function update(index: number, newElement: T) {
        setValue((a: T[]) => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1, a.length),
        ]);
    }

    function updateById(id: string | number, newElement: T, idLabel: string = 'id') {
        //@ts-ignore
        const index = value.findIndex((e: T) => e[idLabel] === id);
        if (index > -1) update(index, newElement);
    }

    function remove(index: number) {
        setValue((a: T[]) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
    }

    function removeById(id: string | number, idLabel: string = 'id') {
        filter((e: T) => {
            //@ts-ignore
            if (e[idLabel]) return e[idLabel] !== id;
            return true;
        });
    }

    function clear() {
        setValue([]);
    }

    return { value, setValue, push, unshift, filter, findById, update, updateById, remove, removeById, clear, length };
}

export default useArray;