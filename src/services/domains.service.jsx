import { useContext } from 'react';
import { ApiHelper } from '../redux/serviceHelper'
import {GuardianEyeContext} from 'redux/context';

const baseUrl = `http://172.31.0.176:8000`

const getAPIEndPoint = (url) => {
    return `${baseUrl}${url}`
}

export const getSummary = async () => {
    const url = '/getSummary'
    try {
        const { statusCode, result } = await ApiHelper(getAPIEndPoint(url), 'POST')
        return result
    } catch (err) {
        return {
            Success: false,
            statusCode: 500
        }
    }
}

export const getAllDomains = async () => {
    const url = '/getDomainsList'
    try {
        const { statusCode, result } = await ApiHelper(getAPIEndPoint(url), 'POST')
        return result
    } catch (err) {
        return {
            Success: false,
            statusCode: 500
        }
    }
}
