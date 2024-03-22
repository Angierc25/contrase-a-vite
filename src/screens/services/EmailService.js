import apiClient from "../apiss/AxiosConfig";

const sendemail = async (credentialsrecovery)  => {
    try {
        const {data, status} = await apiClient.post(`/envioCorreo`, credentialsrecovery);
        return {
            data,
            status
        }
    } catch (error) {
        console.log(error)
    }
}

const sendnewpassword = async (token, newPassword)  => {
    try {
        const {data, status} = await apiClient.post(`/cambiarPassword/${token}`, newPassword);
        return {
            data,
            status
        }
    } catch (error) {
        console.log(error)
    }
}

export {
    sendemail,
    sendnewpassword
}