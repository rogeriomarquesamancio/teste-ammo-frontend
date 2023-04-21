import { useCallback, useState, useEffect } from 'react'

import { IUseLocalStorageActions } from './useLocalStorage.interface';

function useLocalStorage<T>(key: string, initialValue?: T): IUseLocalStorageActions<T> {
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    useEffect(() => {
        if (value === undefined) return localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    const remove = useCallback(() => {
        setValue(undefined);
    }, []);

    return {
        value,
        setValue,
        remove
    };
}

export default useLocalStorage;