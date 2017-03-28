import axios from 'axios';

const Utils = {
    getResults:()=>{
         return axios.get('../api/questions')
        .then((response)=>{
            return response;
        });
    },

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
    },
    submitQuestion:(question) =>{
        return axios.post('../api/questions/updateAnswer', question)
        .then((response) =>{
            return response;
        });
    }
}

export default Utils;