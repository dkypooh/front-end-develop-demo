/**
 * @memberOf IMSystemMessage
 * - '`addFriend`' 添加好友
 * @name type
 * @readOnly
 * @enum {String}
 */

/**
 * 内建系统通知的状态
 * - `'init'`: 未处理状态
 * - `'passed'`: 已通过
 * - `'rejected'`: 已拒绝
 * - `'error'`: 错误
 *
 * @memberOf IMSystemMessage
 * @name state
 * @readOnly
 * @enum {String}
 */

/**
 * 系统通知
 * @description 通知消息属于`会话内`的一种消息，用于会话内通知和提示场景。例如：群名称更新、某某某退出了群聊等
 * @name SystemMessage
 *
 * @namespace
 * @property {String}           msgId                   消息Id
 * @property {Number}           time                    时间戳
 * @property {String}           [type]                  {@link IMSystemMessage.type|系统通知类型}
 * @property {String}           from                    系统通知的来源, 账号或者群ID
 * @property {String}           to                      系统通知的目标, 账号或者群ID
 * @property {Boolean}          [read]                  内建系统通知是否已读
 * @property {NIMError}         [state]                 内建系统通知的{@link IMSystemMessage.state|state}状态
 * @property {String}           [scene]                 自定义系系统通知的场景, 参考{@link IMMessage.scene|消息场景}
 * @property {String}           [content]               文本消息内容
 * @property {String}           [custom]                自定义消息内容，`JSONString`格式
 */