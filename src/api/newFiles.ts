import axios from 'axios';
import { FileDto } from '../types/apiTypes';

const API_BASE_URL = 'https://lg-s-app08:4443';

export const NewFilesApi = () => {
    const getFilesInFolder = async (folderId: number): Promise<FileDto[]> => {
        const response = await axios.get(`${API_BASE_URL}/test/vwFile/${folderId}`);
        return response.data;
    };

    const downloadFile = async (fileMasterId: number, fileName: string): Promise<void> => {
        const response = await axios.get(
            `${API_BASE_URL}/test/api/FolderLookingCntrl/download/${fileMasterId}/${fileName}`,
            { responseType: 'blob' }
        );

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
    };

    return { getFilesInFolder, downloadFile };
};