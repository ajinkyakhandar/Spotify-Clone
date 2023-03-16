import { getTokenFromResponse } from "../spotify";

let token =
  "Bearer BQBis02UxUOh58vA_t2yYCqT9OJPUhjA2O--CYeSYuf8bm4-QHmsOZ2LHuSulP9fFV0dxEAXyerygsSq_N1A7sTOEVBffJidsLONhvWQRro3yIglUyq0H6XG9oTE8OVafw9dH1u8loief52ksQUJ4pNqOcmF_t83_FA2zdQ6CqjuFxTL2ihi-OtycRzrgMJ27WP3JAJlHUnsCqWsM8bYD6twtLVoCvGhNYqQckjv45uUjOKaJ3yHDCHPUQcV2B5YTPptkPqP_2jG_F-9kuQK5_gXeEfzlcxDXrazcaQ06Nblbb68Gx3SFM9v6iI3QLPXg3o2QFOV_ajZ_naAzw";
export const getAuthToken = () => {
  const hash = getTokenFromResponse();
  window.location.hash = "";
  let _token = hash.access_token;
  if (_token){
    _token = "Bearer " + _token
    return _token;
  }
  return ""
  
};

export const getPlaylist = async (authToken) => {
  let url = "https://api.spotify.com/v1/me/playlists";
  let headers = {
    "Content-Type": "application/json",
    Authorization: authToken,
  };
  let options = {
    method: "GET",
    headers,
  };
  let data = await fetch(url, options);
  let res = await data.json();
  console.log(res);
  return res;
};

export const getplaylistByID = async (authToken, playlist_id) => {
  let url = "https://api.spotify.com/v1/playlists/" + playlist_id;
  let headers = {
    "Content-Type": "application/json",
    Authorization: authToken,
  };
  let options = {
    method: "GET",
    headers,
  };
  let data = await fetch(url, options);
  let res = await data.json();
  return res;
};

export const getCurrentUser = async (authToken) => {
  let url = "https://api.spotify.com/v1/me";
  let headers = {
    "Content-Type": "application/json",
    Authorization: authToken,
  };
  let options = {
    method: "GET",
    headers,
  };
  let data = await fetch(url, options);
  let res = await data.json();
  return res;
};

export const getFollowingList = async () => {
  let url = "https://api.spotify.com/v1/me/following";
  let headers = {
    "Content-Type": "application/json",
    Authorization: token,
    type: "artist",
  };
  let options = {
    method: "GET",
    headers,
  };
  let data = await fetch(url, options);
  let res = await data.json();
  return res;
};

export const getSearchIcon = async (query) => {
  let url = "https://api.spotify.com/v1/search";
  let headers = {
    "Content-Type": "application/json",
    Authorization: token,
    type: "artist",
    q: query,
    limit: 1,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "false",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers": "*",
  };
  let options = {
    method: "GET",
    headers,
  };
  let data = await fetch(url, options);
  let res = await data.json();
  return res;
};

export const getRecentlyPlayed = async () => {
  let url = "https://api.spotify.com/v1/me/player/recently-played";
  let headers = {
    "Content-Type": "application/json",
    Authorization: token,
    limit: 1,
  };
  let options = {
    method: "GET",
    headers,
  };
  let data = await fetch(url, options);
  let res = await data.json();

  console.log("recent ", res);
  return res;
};

export const dummyPlayBox = {
  image: "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431",
  trackName: "Ghost",
  artists: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s",
      },
      href: "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
      id: "1uNFoZAHBGtllmzznpCI3s",
      name: "Justin Bieber",
      type: "artist",
      uri: "spotify:artist:1uNFoZAHBGtllmzznpCI3s",
    },
  ],
  preview_url:
    "https://p.scdn.co/mp3-preview/1715841bf1c8e55e069d7bc69d44fab3bd42ca68?cid=774b29d4f13844c495f206cafdad9c86",
};
