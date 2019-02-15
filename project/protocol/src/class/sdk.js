/**
 * 垂直业务类型
 * @readonly
 * @memberOf IMSDK
 * @name biz
 */

/**
 * @class IMSDK
 * @description 消息基础SDK，`回调函数全部小写`
 * @name IMSDK
 *
 * @param {Object} options                      配置参数
 * @param {String} options.appKey               应用APPKEY
 * @param {String} options.biz                  业务类型, BC, CC, 小蜜等 {@link IMSDK.biz|业务类型 }
 * @param {String} options.targetId             目标用户Id, 可以是群ID或者用户Nick
 * @param {String} [options.account]            账号Id或者Nick
 * @param {Function} options.onlogin            登入回调，可以拿到用户信息
 * @param {Function} options.onconnect          连接建立后的回调, 会传入一个对象, 包含登录的信息
 * @param {Function} options.onclose            断开连接后的回调
 * @param {Function} options.onerror            发生错误回调  {@link IMError|消息错误}
 * @param {Function} options.onmsg              实时消息回调 {@link IMMessage|消息体}
 * @param {Function} options.onsystemmsg        系统消息回调
 * @param {Function} options.onofflinemsg       离线消息，漫游消息，历史消息回调 {@link IMMessage|消息体}
 * @param {Function} options.onconversation     同步最近会话{@link Conversation|会话}列表回调, 会传入会话列表。
 *
 *
 * @example
 *
 * const imsdk = new IMSDK({
 *      appkey: 'appKey',
 *      targetId: '红包测试账号',
 *      account: 'account',
 *      onlogin: onLogin,
 *      onclose: onClose,
 *      onerror: onError,
 *      onmsg: onMsg,
 *      onsystemmsg: onSystemMsg,
 *      onofflinemsg: onOfflineMsg,
 *      onconversation: onConversation
 * })
 *
 * const onLogin = (user: IMUser) => {
 *  // user 用户信息
 * }
 *
 * const onError = (error: IMError) => {
 *   // 错误对象处理
 * }
 *
 * const onMsg = (msgs: IMMessage[]) => {
 *  // 实时消息同步
 * }
 *
 * const onSystemMsg = (msgs: IMSystemMessage[]) => {
 *  // 系统通知消息
 *  // 通知消息属于`会话内`的一种消息，用于会话内通知和提示场景。例如：群名称更新、某某某退出了群聊等
 * }
 *
 * const onOfflineMsg = (msgs: IMMessage[]) => {
 *  // 离线消息，漫游消息，历史消息回调
 * }
 *
 * const onConversation = (conversation: Conversation[]) => {
 *  // 最近会话
 * }
 *
 */

class IMSDK {
    constructor(options) {

    }
    /**
     * 获取当前实例
     * @returns {Object} context                当前上下文
     * - context.user       用户信息
     * - context.session    当前会话信息
     */
    getInstance() {

    }

    /**
     * 发送消息
     * @param {IMMessage} message               消息对象
     * @return {Promise} promise
     */
    sendMsg(message){

    }

    /**
     * 发送系统通知
     *
     * @param {IMSystemMessage} message
     */
    sendSystemNotice(message) {

    }

    /**
     * 获取离线消息，漫游消息，历史消息
     *
     * @param {Number} snycId                   同步标记Id
     */
    getOfflineMsg(sycId) {

    }

}

