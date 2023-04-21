import { useRef, useState } from 'react';

import RestAPIEndpoints from '../../module/api/endpoints';
import { IUseDoRequestActions } from './useDoRequest.interface';

function useDoRequest<input, output>(
    apiRequest: (a: typeof RestAPIEndpoints) => ((data: input) => Promise<output>)
): IUseDoRequestActions<input, output> {
    const [loading, setLoading] = useState(false);
    const dataRef = useRef<input | null>(null);

    async function doRequest(data: input): Promise<output> {
        return new Promise(async (resolve, reject) => {
            try {
                dataRef.current = data;
                setLoading(true);
                const result = await apiRequest(RestAPIEndpoints)(data);
                setLoading(false);
                resolve(result);
            } catch (error) {
                setLoading(false);
                reject(error);
            }
        })
    }

    return {
        loading,
        doRequest,
    };
}

export default useDoRequest;