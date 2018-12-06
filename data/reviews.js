const imgGen = require('@dudadev/random-img');
const json = require('./reviews.json');

const getAvatar = function(gender, id) {
    imgGen({gender: 'men', id: this.id}).then(
        function(avatarUrl) {
            return avatarUrl
        });
}
const data = [
    {
        id: "01",
        username: "John Doe",
        text: "This app rockes",
        avatar: getAvatar('men', Number(this.id)) 
    },
    {
        id: "02",
        username: "Mad Max",
        text: "cool app",
        avatar: getAvatar('men', Number(this.id)) 
    },
    {
        id: "03",
        username: "John Doe",
        text: "long long long long long long long long long long long long long long long long long long long long long review",
        avatar: getAvatar('men', Number(this.id))
    }
]

module.exports = data;