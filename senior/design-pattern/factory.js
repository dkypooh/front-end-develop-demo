// 1. 父类实现基本定义，定义姓名
class Parent {
  getName() {

  }
}

// 2. 子类集成了父类的各个基因，男孩名字叫 bob
class ChildBoy extends Parent {
  getName() {
      return 'bob';
  }
}

// 3. 子类集成了父类的各个基因，女孩名字叫 alice
class ChildGirl extends Parent {
  getName() {
      return 'alice';
  }
}