export function ApiHelper(url, method = 'POST', data) {
    const controller = new AbortController()
    const signal = controller.signal
    const accessToken = sessionStorage.getItem('access_token')
    const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken
    }
    const timer = setTimeout(() => {
        clearTimeout(timer)
        controller.abort()
    }, 30000)

    return fetch(url, {
        method,
        headers,
        body: JSON.stringify(data),
        signal
    })
        .then(res => {
            return res.json().then(result => ({
                statusCode: res.status,
                result
            }))
        })
        .then(({ statusCode, result }) => {
            return { statusCode, result }
        })
        .catch(error => {
            if (error.name === 'AbortError') {
                return { statusCode: 408, result: { transaction: false, message: 'Looks like the server is taking to long to respond, this can be caused by either poor connectivity or an error with our servers. Please try again in a while' } }
            } else if (error.toString().toLowerCase().includes('failed to fetch')) {
                return { statusCode: 500, result: { transaction: false, message: 'Please check your internet and vpn connectivity' } }
            } else {
                return { statusCode: 500, result: { transaction: false, message: 'Something went wrong, please contact admin.' } }
            }
        })
}