import axios from 'axios';

const helpers = {
    getQuestion:() =>{
        return axios.get('../api/avaliableQuestions')
        .then((response)=>{
            return response.data;
        });

    }
}

export default helpers;