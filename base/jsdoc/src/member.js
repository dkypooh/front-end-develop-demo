/**
 * 文件对象
 *
 * @name File
 * @property {String} url  url
 * @property {String} name 名字
 * @property {Number} size 大小, 单位byte
 * @property {String} md5  md5
 * @property {String} ext  扩展名
 * @see {@link Image|图片对象}
 * @see {@link Audio|音频对象}
 * @see {@link Video|视频对象}
 * @see {@link Geo|地理位置对象}
 */

/**
 * 图片对象
 *
 * @name Image
 * @property {String} url  url
 * @property {String} name 名字
 * @property {Number} size 大小, 单位byte
 * @property {String} md5  md5
 * @property {String} ext  扩展名
 * @property {String} w    宽, 单位px
 * @property {String} h    高, 单位px
 * @see {@link Audio|音频对象}
 * @see {@link Video|视频对象}
 * @see {@link File|文件对象}
 * @see {@link Geo|地理位置对象}
 */

/**
 * 音频对象
 *
 * @name Audio
 * @property {String} url       url
 * @property {String} name      名字
 * @property {Number} size      大小, 单位byte
 * @property {String} md5       md5
 * @property {String} mp3Url    实时转成 mp3 流的 url, 此 url 支持的格式有: mp3, wav, aac, wma, wmv, amr, mp2, flac, vorbis, ac3
 * @property {String} ext       扩展名
 * @property {Number} dur       长度, 单位ms
 * @see {@link Image|图片对象}
 * @see {@link Video|视频对象}
 * @see {@link File|文件对象}
 * @see {@link Geo|地理位置对象}
 */

/**
 * 视频对象
 *
 * @name Video
 * @property {String} url  url
 * @property {String} name 名字
 * @property {Number} size 大小, 单位byte
 * @property {String} md5  md5
 * @property {String} ext  扩展名
 * @property {Number} dur  长度, 单位ms
 * @property {Number} w    宽, 分辨率, 单位px
 * @property {Number} h    高, 分辨率, 单位px
 * @see {@link Image|图片对象}
 * @see {@link Audio|音频对象}
 * @see {@link File|文件对象}
 * @see {@link Geo|地理位置对象}
 */

/**
 * 地理位置对象
 *
 * @name Geo
 * @property {Number} lng 经度
 * @property {Number} lat 纬度
 * @property {String} title 地址描述
 * @see {@link Image|图片对象}
 * @see {@link Audio|音频对象}
 * @see {@link Video|视频对象}
 * @see {@link File|文件对象}
 */
