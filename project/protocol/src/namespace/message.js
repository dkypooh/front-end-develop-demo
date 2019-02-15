/**
 * 消息类型
 *
 * - `'text'` (文本)
 * - `'image'` (图片)
 * - `'audio'` (音频)
 * - `'video'` (视频)
 * - `'file'` (文件)
 * - `'geo'` (地理位置)
 * - `'custom'` (自定义消息)
 * - `'tip'` (提醒消息)
 *     - 提醒消息用于会话内的状态提醒，如进入会话时出现的欢迎消息，或者会话命中敏感词后的提示消息等等.
 * - `'notification'` (群通知消息)
 *     - 某些群操作后所有群成员会收到一条相应的群通知消息, 详细介绍请参考{@link IMMessage.attach.type|群通知消息的类型}
 *     - 此类消息不会计入未读数
 *
 * @memberOf IMMessage
 * @name type
 * @readOnly
 * @enum {String}
 */


 /**
 * 场景
 *
 * - `'p2p'` (单人聊天)
 * - `'team'` (群聊)
 *
 * @memberOf IMMessage
 * @name scene
 * @readOnly
 * @enum {String}
 */

 
/**
 * IM消息体测试
 * @description 消息体设计尽量偏平化
 * 
 * @namespace
 * @name IMMessage
 * @property {String}   conversationId  消息所属的{@link Conversation|会话}的ID
 * @property {String}   id              服务器用于区分消息用的ID, `会涉及消息重发重复`, 所以开发者应该使用`idClient`来唯一标识消息
 * @property {String}   idClient        SDK生成的消息id, 在发送消息之后会返回给开发者, 开发者可以在发送消息的结果回调里面根据这个ID来判断相应消息的发送状态, 到底是发送成功了还是发送失败了, 然后根据此状态来更新页面的UI。如果发送失败, 那么可以重新发送此消息
 * @property {String}   [scene='single']   {@link IMMessage.scene|场景}
 * @property {String}   type            {@link IMMessage.type|消息类型}
 * @property {String}   from            消息发送方, 帐号
 * @property {String}   to              消息接收方, 帐号或群id
 * @property {Number}   time            消息时间戳
 * @property {String}   flow            消息的流向
 * - `'in'`表示此消息是收到的消息
 * - `'out'`表示此消息是发出的消息
 * @property {String}   status          消息发送状态
 * - `'sending'` 发送中
 * - `'success'` 发送成功
 * - `'fail'` 发送失败
 * @property {String}   [content]       文本消息的文本内容, 请参考{@link NIM#sendText|发送文本消息}
 * @property {Object}   [file]          文件消息的文件对象, 具体字段请参考{@link Image|图片对象}、{@link Audio|音频对象}、{@link Video|视频对象}和{@link File|文件对象}, 请参考{@link NIM#sendFile|发送文件消息}
 * @property {Object}   [geo]           地理位置消息的{@link Geo|地理位置对象}, 请参考{@link NIM#sendGeo|发送地理位置消息}
 * @property {String}   [tip]           提醒消息的内容
 * @property {Boolean}  resend          是否是重发的消息
 * @property {String}   [custom]        扩展字段, `用途扩展自定消息`
 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
 */
