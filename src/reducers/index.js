import { combineReducers } from 'redux';
const songReducers = () =>{
    return [
        { title: 'apple', duration: '4.02'},
        { title: 'mango', duration: '3.05'},
        { title: 'pear', duration: '4.20'},
        { title: 'guvava', duration: '3.02'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}
export default combineReducers ({
songs:songReducers,
selectedSong:selectedSongReducer
});