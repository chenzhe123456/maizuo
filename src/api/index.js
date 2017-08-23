// Home参数 __t 当前时间戳  http://m.maizuo.com/v4/api/billboard/home?__t=1503197455737
const homeApi = '/v4/api/billboard/home';
// Home参数 __t 当前时间戳  http://m.maizuo.com/v4/api/film/now-playing?__t=1503219862294&page=1&count=5
const nowPLaying = '/v4/api/film/now-playing';
// Home参数 __t 当前时间戳  http://m.maizuo.com/v4/api/film/now-playing?__t=1503219862294&page=1&count=5
const comingSoon = '/v4/api/film/coming-soon';
// Movies参数 热映 http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
const moviesApi = '/v4/api/film/now-playing'
// 即将上映  http://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
const moviesWillApi = '/v4/api/film/coming-soon'
// 全部影院http://m.maizuo.com/v4/api/cinema?__t=1503314314044
const cinemaApi = '/v4/api/cinema'
// 卖座商城http://aura.maizuo.com/api/ad/list
const shopApi = '/api/ad/list'
// 卖座商城http://aura.maizuo.com/api/recommend/home?page=1&num=20
const shopGoods = '/api/recommend/home'
export default{
    homeApi,
    nowPLaying,
    comingSoon,
    moviesApi,
    moviesWillApi,
    cinemaApi,
    shopApi,
    shopGoods
}