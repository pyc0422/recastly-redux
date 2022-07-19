import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    var obj = {
      key: YOUTUBE_API_KEY,
      query: q,
    };
    dispatch(setTimeout(() => {
      searchYouTube(obj, (data) => {
        return data;
      });
    }, 1000));
  };
};

export default handleVideoSearch;

// export function errorAfterFiveSeconds() {
//     // We return a function instead of an action object
//     return (dispatch) => {
//         setTimeout(() => {
//             // This function is able to dispatch other action creators
//             dispatch(itemsHasErrored(true));
//         }, 5000);
//     };
// }
// export function itemsFetchData(url) {
//   return (dispatch) => {
//       dispatch(itemsIsLoading(true));

//       fetch(url)
//           .then((response) => {
//               if (!response.ok) {
//                   throw Error(response.statusText);
//               }

//               dispatch(itemsIsLoading(false));

//               return response;
//           })
//           .then((response) => response.json())
//           .then((items) => dispatch(itemsFetchDataSuccess(items)))
//           .catch(() => dispatch(itemsHasErrored(true)));
//   };
// }
