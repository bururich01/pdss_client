import axios from 'axios';
import { FolderDto } from '../types/apiTypes';

const API_BASE_URL = 'https://lg-s-app08:4443';

export const FoldersApi = () => {
    const getRootFolders = async (): Promise<FolderDto[]> => {
        const response = await axios.get(`${API_BASE_URL}/test/Folder/roots`);
        return response.data;
    };

    return { getRootFolders };
};