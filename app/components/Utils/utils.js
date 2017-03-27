import axios from 'axios';

const Utils = {
    getQuestion:() =>{
        return axios.get('../api/avaliableQuestions')
        .then((response)=>{
            return response.data;
        });

    },

    submitAnswer:(id) =>{
        return axios.put('../api/questions/updateAnswer', {answerId: id})
        .then((response) =>{
            return response;
        });
    }
}

export default Utils;