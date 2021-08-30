const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let advancedUsers = users.filter( users => (users.languages.length >= 3));
console.log(advancedUsers);

let userEmails = users.map(users => (users.email));
console.log(userEmails);

let totalExperience = users.reduce((total,users,index,array) =>{
    return (total + users.yearsOfExperience) / array.length
},0);
console.log(totalExperience);
let longestEmail = users.reduce((total,users,index,array)=>{
    if(index===array.length-1){
        total.push(users.email)
        total.sort((a,b)=>b.length-a.length)
        return total[0];
    }else{
        total.push(users.email)
        return total
    }
},[]);
console.log(longestEmail);