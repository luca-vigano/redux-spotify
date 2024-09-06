export const SAVE_SEARCH = "SAVE_SEARCH";
export const SET_SONG = "SET_SONG";

export const getResultsAction = (query) => {
  return (dispatch, getState) => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel recupero dati");
        }
      })
      .then((result) => {
        dispatch({
          type: SAVE_SEARCH,
          payload: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const selectedSong = (song) => {
  return {
    type: SET_SONG,
    payload: song,
  };
};
