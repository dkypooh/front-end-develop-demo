## 通用SDK模块
通用SDK集成了 `事件模块` 和 `中间件模块`

### 测试用例
```javascript
import SDK from '../src/index'

describe('SDK Test', () => {
  const sdk = new SDK([]);
  it('subscribe and publish', (done) => {
    sdk.on('publish', (obj) => {
      expect(obj).toEqual({cmd: 'publish'});
      done();
    })
    sdk.emit('publish', {cmd: 'publish'});
  });

  it('add middleware module', (done) => {
    sdk.useBatch([(ctx: any) => {
      ctx.message.content = 'test';
    }, (ctx: any) => {
      ctx.conversation.lastMsg = 'test';
    }])
    sdk.dispatch({type: 'text'}, {id: 'yyy'}).then((ctx) => {
      expect(ctx.message).toEqual({ type: 'text', content: 'test' })
      expect(ctx.conversation).toEqual({ id: 'yyy', lastMsg: 'test' })
      done();
    })
  })
})
```
