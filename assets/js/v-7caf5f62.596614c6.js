"use strict";(self.webpackChunknote_goog_tech=self.webpackChunknote_goog_tech||[]).push([[629],{721:(l,i,e)=>{e.r(i),e.d(i,{data:()=>u});const u={key:"v-7caf5f62",path:"/data-structure/chapter03.html",title:"栈和队列",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"考查点",slug:"考查点",children:[]},{level:3,title:"栈",slug:"栈",children:[]},{level:3,title:"队列",slug:"队列",children:[]},{level:3,title:"数组（线性表的推广）",slug:"数组-线性表的推广",children:[]}],filePathRelative:"data-structure/chapter03.md",git:{updatedTime:1632809745e3,contributors:[{name:"googtech",email:"hi@goog.tech",commits:1}]}}},2518:(l,i,e)=>{e.r(i),e.d(i,{default:()=>t});const u=(0,e(6252).uE)('<h1 id="栈和队列" tabindex="-1"><a class="header-anchor" href="#栈和队列" aria-hidden="true">#</a> 栈和队列</h1><h3 id="考查点" tabindex="-1"><a class="header-anchor" href="#考查点" aria-hidden="true">#</a> 考查点</h3><ul><li><p>考纲内容</p><ul><li><ol><li>栈和队列的基本概念</li></ol></li><li><ol start="2"><li>栈和队列的顺序及链式存储结构</li></ol></li><li><ol start="3"><li>栈和队列的应用</li></ol></li><li><ol start="4"><li>特殊矩阵的压缩存储</li></ol></li></ul></li><li><p>复习提示</p><ul><li>本章以选择题为主, 重点考查栈（出入栈的过程及出栈序列的合法性）和队列的操作及特征</li></ul></li></ul><h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h3><p>栈(Stack)是只允许在一端进行插入或删除的<strong>操作受限</strong>的线性表, 其特征为<strong>FILO/LIFO</strong>.</p><ul><li><p>栈的示意图</p><ul><li></li></ul></li><li><p>顺序栈</p><p>利用一组地址连续的存储单元存放自栈底到栈顶的元素, 同时附设一个指针(top)指向当前栈顶元素的位置.</p><ul><li><p>栈顶指针和栈中元素之间的关系示例图</p><ul><li>进栈为 \ufeff 出栈为</li></ul></li></ul></li><li><p>链栈</p><p>采用链式存储的栈称为链栈, 其优点为便于多个栈共享存储空间和提高操作效率, 且不存在栈满上溢的情况.</p><ul><li><p>栈的链式存储示例图</p><ul><li>便于节点的插入和删除, 出入栈的操作都在链表的表头进行.</li></ul></li></ul></li><li><p>共享栈</p><p>利用栈底位置相对不变的特性, 将两个顺序栈共享一个一维数组空间, 两个栈底分别设置在共享空间的两端, 栈顶向共享空间的中间延伸. 其优点为节省空间, 降低发生上溢的可能.</p><ul><li><p>两个顺序栈共享存储空间的示例图</p><ul><li>存取效率不变, 其时间复杂度均为\ufeff.</li></ul></li></ul></li><li><p>卡特兰\ufeff数</p><ul><li>个不同元素入栈, 出栈元素不同排序的个数为</li></ul></li></ul><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h3><p>队列(Queue)也是一种<strong>操作受限</strong>的线性表, 只允许在表的一端进行插入, 而在表的另一端进行删除, 其特征为<strong>FIFO/LILO</strong>.</p><ul><li><p>队列的示意图</p><ul><li></li></ul></li><li><p>顺序队列</p><p>用一块连续的存储单元存放队列中的元素, 并附设两个指针: 队头指针front指向队头元素, 队尾指针rear指向队尾元素的下一个位置(不同教材的定义不同哈).</p><ul><li><p>队列的操作示例图</p><ul><li>并不能用 \ufeff 作为队满的条件, 如图 (d) 的假溢出（引出循环队列）.</li></ul></li></ul></li><li><p>循环队列</p><p>为了解决顺序队列的缺点, 引出了循环队列的概念. 将顺序队列臆造成一个环状的空间, 即把存储队列元素的表从逻辑上视为一个环, 称为循环队列.</p><ul><li><p>循环队列出入队示例图</p><ul><li>为了判空及判满，约定以“队头指针在队尾指针的下一个位置作为队满的标志”</li></ul></li></ul></li><li><p>链式队列</p><p>实际上是一个同时带有队头指针和队尾指针的单链表, 头指针指向队头节点, 尾指针指向队尾节点(单链表的最后一个节点).</p><ul><li><p>不带头结点的链式队列示例图</p><ul><li></li></ul></li><li><p>带头节点的链式队列示例图</p><ul><li>当仅有一个元素时, 删除后队列为空, 故头尾指针都需要修改, 即</li></ul></li></ul></li><li><p>双端队列</p></li></ul><h3 id="数组-线性表的推广" tabindex="-1"><a class="header-anchor" href="#数组-线性表的推广" aria-hidden="true">#</a> 数组（线性表的推广）</h3><ul><li><p>一维数组</p></li><li><p>多维数组</p><ul><li>压缩存储</li><li>稀疏矩阵</li></ul></li></ul>',11),t={render:function(l,i){return u}}}}]);