export const getReviewList = async (api, url) => {
    try {
        const res = await api.getMethod(url);
        return res;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const updateReviewList = async (api, url) => {
    try {
        const res = await api.getMethod(url);
        return res;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const addReview = async (api, url, payload) => {
    try {
        const res = await api.postMethod(url, payload);
        return res;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export default {
    getReviewList,
    updateReviewList,
    addReview
}