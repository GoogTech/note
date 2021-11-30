"use strict";(self.webpackChunknote_goog_tech=self.webpackChunknote_goog_tech||[]).push([[690],{7787:(l,i,u)=>{u.r(i),u.d(i,{data:()=>p});const p={key:"v-279cff42",path:"/operating-system/chapter05.html",title:"输入/输出管理",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"考查点",slug:"考查点",children:[]},{level:3,title:"概述",slug:"概述",children:[]},{level:3,title:"缓冲区",slug:"缓冲区",children:[]},{level:3,title:"设备分配",slug:"设备分配",children:[]},{level:3,title:"SPOOLing系统",slug:"spooling系统",children:[]}],filePathRelative:"operating-system/chapter05.md",git:{updatedTime:1632884668e3,contributors:[{name:"googtech",email:"hi@goog.tech",commits:1}]}}},7295:(l,i,u)=>{u.r(i),u.d(i,{default:()=>e});const p=(0,u(6252).uE)('<h1 id="输入-输出管理" tabindex="-1"><a class="header-anchor" href="#输入-输出管理" aria-hidden="true">#</a> 输入/输出管理</h1><h3 id="考查点" tabindex="-1"><a class="header-anchor" href="#考查点" aria-hidden="true">#</a> 考查点</h3><ul><li><p>考纲内容</p><ul><li><p>I/O管理概念</p><ul><li>I/O控制方式</li><li>I/O软件层次结构</li></ul></li><li><p>I/O核心子系统</p><ul><li>I/O调度概念</li><li>高速缓冲与缓冲区</li><li>设备分配与回收</li><li>假脱机技术（SPOOLing）</li></ul></li></ul></li><li><p>复习提示</p><ul><li>重点掌握 I/O设备的的基本特性、I/O子系统的特性、三种I/O控制方式、高速缓冲与缓冲区、SPOOLing技术</li></ul></li></ul><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><ul><li><p>I/O设备分类</p><ul><li><p>按使用特性分类</p><ul><li>人机交互类外部设备、存储设别、网络通信设备</li></ul></li><li><p>按传输速率分类</p><ul><li>低速设备、中速设备、高速设备</li></ul></li><li><p>按信息交换的单位分类</p><ul><li>块设备：存取的基本单位为数据块、传输速率高、可寻址</li><li>字符设备：传输的基本单位为字符、传输速率低、不可寻址</li></ul></li></ul></li><li><p>I/O控制方式</p><ul><li><p>程序直接控制</p><ul><li>优点：简单且易实现</li><li>缺点：CPU和I/O设备只能串行工作，CPU需一直轮询检查，长期处于“忙等”状态，进而CPU利用率低</li></ul></li><li><p>中断驱动方式</p><ul><li>优点：CPU和I/O设备可以并行工作，CPU利用率得到明显提升</li><li>缺点：每个字在I/O设备与内存之间的传输，都需经过CPU，而频繁的中断处理会消耗较多的CPU时间</li></ul></li><li><p>DMA方式</p><ul><li>优点：DMA直接与存储器交互，传送过程不需要CPU参与. 数据传输以“块”为单位，使CPU接入频率进一步降低</li><li>缺点：CPU每发出一条I/O指令，只能读/写一个或多个连续的数据块</li><li>在I/O设备和主存之间建立一条直接数据通路</li></ul></li><li><p>通道技术</p><ul><li>优点：CPU、通道、I/O设备可并行工作，资源利用率很高</li><li>缺点：实现复杂，需要专门的通道硬件支持</li><li>用于实现内存与外设之间的信息传输</li></ul></li><li><p>四种I/O控制方式的对比示例图</p><ul><li></li></ul></li></ul></li><li><p>I/O层次结构</p><ul><li><p>1.用户层</p><ul><li>实现与用户交互的接口，用户直接调用在用户层提供的、与I/O操作有关的库函数</li></ul></li><li><p>2.设备独立性软件层（系统调用的处理程序）</p><ul><li><p>实现用户程序与设备驱动器的统一接口、接口命令、设备保护及设备分配与释放等</p></li><li><p>逻辑设备表（LUT，Logical Unit Table）</p><ul><li>设备映射表中记录了逻辑设备所对应的物理设备，体现了两者的对应关系</li></ul></li></ul></li><li><p>3.设备驱动层</p><ul><li>与硬件直接相关，负责具体实现系统对设备发出的操作指令，驱动I/O设备工作的驱动程序</li></ul></li><li><p>4.中断处理层</p><ul><li>用于保护被中断进程的CPU环境，转入相应的中断处理程序进行处理</li></ul></li><li><p>5.硬件层</p><ul><li><p>由机械部件、电子部件组成，用于执行I/O操作</p></li><li><p>电子部件（设备控制器，I/O控制器）</p><p>CPU无法直接控制I/O设备的机械部件, 因此I/O设备还要有一个电子部件作为<strong>CPU</strong>和<strong>I/O设备机械部件</strong>之间的**&quot;中介&quot;<strong>, 用来实现CPU对设备的控制, 这个电子部件就是</strong>I/O控制器**, 又称<strong>设备控制器</strong>.</p><ul><li><p>主要功能</p><ul><li>接受和识别CPU发出的命令（要有控制寄存器）</li><li>向CPU报告设备的状态（要有状态寄存器）</li><li>数据交换（要有数据寄存器，暂存输入/输出的数据）</li><li>地址识别（由I/O逻辑实现）</li><li>I/O逻辑即设备控制器，用来实现对设备的控制</li></ul></li><li><p>组成</p><ul><li>CPU与控制器之间的接口（实现控制器与CPU之间的通信）</li><li>控制器与设备之间的接口（实现控制器与设备之间的通信）</li><li>I/O逻辑（负责识别CPU发出的命令，并向设备发出命令）</li></ul></li></ul></li></ul></li></ul></li></ul><h3 id="缓冲区" tabindex="-1"><a class="header-anchor" href="#缓冲区" aria-hidden="true">#</a> 缓冲区</h3><ul><li><p>概念</p><ul><li>因硬件成本高而且容量也比较小，故一般利用内存作为缓冲区</li><li>特点：缓冲区的数据非空时，不能往缓冲区冲入数据. 必须把缓冲区充满后，才能才缓冲区把数据传出</li><li>作用：缓解CPU与设备的速度矛盾、减少对CPU的中断频率、解决数据粒度不匹配的问题、提高CPU与I/O设备之间的并行性</li></ul></li><li><p>单缓冲</p><ul><li>处理一块数据平均耗时 Max(C, T) + M</li><li>分析问题的初始状态：工作区满、缓冲区空</li></ul></li><li><p>双缓冲</p><ul><li>处理一块数据平均耗时 Max(T, C+M)</li><li>分析问题的初始状态：工作区空、一个缓冲区满、另一个缓冲区空</li></ul></li><li><p>循环缓冲</p><ul><li>多个缓冲区链接成循环队列，in指针指向第一个空缓冲区，out指针指向第一个满缓冲区</li></ul></li><li><p>缓冲池</p><ul><li><p>三个队列</p><ul><li>空缓冲队列、输入队列（装满输入数据的缓冲队列）、输出队列（装满输出数据的缓冲队列）</li></ul></li><li><p>四种工作缓冲区</p><ul><li>用于收容输入数据的工作缓冲区、用于提取输入数据的工作缓冲区</li><li>用于收容输出数据的工作缓冲区，用于提取输出数据的工作缓冲区</li></ul></li></ul></li><li><p>高速缓存与缓冲区的对比示例图</p><ul><li></li></ul></li></ul><h3 id="设备分配" tabindex="-1"><a class="header-anchor" href="#设备分配" aria-hidden="true">#</a> 设备分配</h3><ul><li><p>概述</p><ul><li>独占设备：独占式使用</li><li>共享设备：分时式共享</li><li>虚拟设备：SPOOLing（Simultaneous Peripheral Operation System）方式</li></ul></li><li><p>策略</p><ul><li><p>静态分配</p><ul><li>进程运行前为其一次性分配全部所需资源，不会出现死锁</li></ul></li><li><p>动态分配</p><ul><li>进程运行过程中根据执行需要动态申请设备资源，可能出现死锁</li></ul></li></ul></li><li><p>数据结构</p><ul><li><p>设备控制表（DCT）</p><ul><li>每个设备对应一张DCT</li><li>关键字段：类型 / 标识符 / 状态 / 指向COCT的指针 / 等待队列指针</li></ul></li><li><p>控制器控制表（COCT）</p><ul><li>每个控制器对应一张COCT</li><li>关键字段：状态 / 指向CHCT的指针 / 等待队列指针</li></ul></li><li><p>通道控制表（CHCT）</p><ul><li>每个控制器对应一张CHCT</li><li>关键字段：状态 / 等待队列指针</li></ul></li><li><p>系统设备表（SDT）</p><ul><li>记录整个系统所有设备的情况，每个设备对应一个表目</li><li>关键字段：设备类型 / 标识符 / DCT / 驱动程序入口</li></ul></li></ul></li><li><p>分配步骤</p><ul><li><ol><li>根据进程请求的物理设备名查找SDT</li></ol></li><li>2.根据SDT找到DCT并分配设备</li><li>3.根据DCT找到COCT并分配控制器</li><li>4.根据COCT找到CHCT并分配通道</li></ul></li><li><p>安全性</p><ul><li><p>安全分配方式</p><ul><li>优点：设备分配安全</li><li>缺点：对于同一个进程而言，CPU与I/O设备是串行工作的</li></ul></li><li><p>不安全分配方式</p><ul><li>优点：一个进程可以同时操作多个设备</li><li>缺点：可能会产生死锁</li></ul></li></ul></li><li><p>设备分配步骤的改进</p><ul><li><p>逻辑设备表（LUT）</p><ul><li><p>用户编程时使用逻辑设备名申请设备，LUT负责实现从逻辑设备名到物理设备名的映射</p><p>用户程序对I/O设备的请求采用<strong>逻辑设备名</strong>, 而程序执行时使用<strong>物理设备名</strong>, 它们之间的转换是由<strong>设备无关层</strong>完成的</p></li></ul></li><li><p>逻辑设备表的设置问题</p><ul><li><p>整个系统只设置一张LUT</p><ul><li>各用户所用的逻辑设备名不允许重复</li></ul></li><li><p>每个用户设置一张LUT</p><ul><li>各个用户设备名可重复</li></ul></li></ul></li></ul></li></ul><h3 id="spooling系统" tabindex="-1"><a class="header-anchor" href="#spooling系统" aria-hidden="true">#</a> SPOOLing系统</h3><ul><li><p>组成</p><ul><li><p>输入井，输出井</p><ul><li>模拟脱机输入/输出时的磁带</li></ul></li><li><p>输入缓冲区、输出缓冲区</p><ul><li>模拟脱机输入/输出时的外围控制机</li></ul></li><li><p>输入设备、输出设备</p><ul><li>内存中的缓冲区，输入、输出时的“中转站”</li></ul></li></ul></li><li><p>脱机技术</p><ul><li>外围控制机 + 更高速的设备（磁带）</li><li>作用：缓解设备与CPU的速度矛盾，实现预输入、缓输出</li></ul></li><li><p>假脱机技术</p><ul><li><p>又称为SPOOLing技术，用软件的方式模拟脱机技术</p><p>SPOOLing技术是操作系统中采用的一种将<strong>独占设备</strong>改造为<strong>共享设备</strong>的技术,其主要<strong>目的</strong>是提高系统资源 / 独占设备的利用率</p></li></ul></li><li><p>实例（共享打印机）</p><ul><li>用SPOOLing技术将独占式的打印机“虚拟”成共享打印机</li></ul></li></ul>',11),e={render:function(l,i){return p}}}}]);