"use strict";(self.webpackChunkgamedevforge=self.webpackChunkgamedevforge||[]).push([[8731],{248:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(4848),n=t(8453),r=t(6450);const s={description:"What are the primitive types in Java?",tags:["Java","Beginner","Core"],slug:"/java-primitive-types",sidebar_position:1,draft:!1},o="Primitive Types",l={id:"java/core/core-fundamentals/java-primitive-types",title:"Primitive Types",description:"What are the primitive types in Java?",source:"@site/docs/java/core/core-fundamentals/java-primitive-types.mdx",sourceDirName:"java/core/core-fundamentals",slug:"/java-primitive-types",permalink:"/docs/java-primitive-types",draft:!1,unlisted:!1,tags:[{label:"Java",permalink:"/docs/tags/java"},{label:"Beginner",permalink:"/docs/tags/beginner"},{label:"Core",permalink:"/docs/tags/core"}],version:"current",sidebarPosition:1,frontMatter:{description:"What are the primitive types in Java?",tags:["Java","Beginner","Core"],slug:"/java-primitive-types",sidebar_position:1,draft:!1},sidebar:"modulesSidebar",previous:{title:"Fundamentals",permalink:"/docs/category/fundamentals"},next:{title:"Variables",permalink:"/docs/java-variables"}},d={},c=[{value:"Bits",id:"bits",level:2},{value:"Boolean",id:"boolean",level:2},{value:"Char",id:"char",level:2},{value:"Byte",id:"byte",level:2},{value:"Short",id:"short",level:2},{value:"Int",id:"int",level:2},{value:"Long",id:"long",level:2},{value:"Float",id:"float",level:2},{value:"Double",id:"double",level:2}];function h(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"primitive-types",children:"Primitive Types"}),"\n",(0,a.jsxs)(i.p,{children:["Java is a typed language, and data types play a fundamental role, serving as blueprints for variables and defining the type of data that can be stored and\r\nmanipulated for a given ",(0,a.jsx)(r.A,{text:"variable"}),". Understanding data types is essential for creating functionality in code for any given\r\ntask."]}),"\n",(0,a.jsx)(i.p,{children:"Variables must have a declared type for them to be interpreted correctly, unlike simpler programming languages that will automatically detect\r\nthis based off what is actively being stored in them. There are many different data types in Java, the most basic types are known as primitive types, they represent\r\nsingle values and are directly supported as part of the language."}),"\n",(0,a.jsxs)(i.p,{children:["Other types such as Java Objects which is are instances of a given ",(0,a.jsx)(r.A,{text:"Class"}),". Objects enable the implementation of concepts like ",(0,a.jsx)(r.A,{text:"Abstraction"}),",\r\n",(0,a.jsx)(r.A,{text:"Inheritance"}),", and ",(0,a.jsx)(r.A,{text:"Polymorphism"}),", which we will explore in more detail in the Object Orientation Page."]}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"This page outlines what primitive types are, in later pages based on variables, operators, and control flow we will discuss in more detail how these types can be used."})}),"\n",(0,a.jsx)(i.p,{children:"In total there are 8 primitive types in Java:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)("code",{children:"boolean"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)("code",{children:"char"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)("code",{children:"byte"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)("code",{children:"short"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)("code",{children:"int"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)("code",{children:"long"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)("code",{children:"float"}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)("code",{children:"double"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"bits",children:"Bits"}),"\n",(0,a.jsx)(i.p,{children:"An important thing to understand before moving on to the explanations of primitive data types are bits. Think of a bit as the smallest unit of information in a computer.\r\nIt's like a tiny switch that can be either \"off\" or \"on\", but in computers they are interpreted as binary, so '0' or '1'."}),"\n",(0,a.jsx)(i.p,{children:"Now, when we group bits together, we can represent more complex information. For example, with just one bit, we can represent two possible values (0 or 1).\r\nBut if we have two bits, we can represent four possible values (00, 01, 10, 11). This scales exponentially as we add more bits to represent a given value or in this case data type."}),"\n",(0,a.jsx)(i.p,{children:"In computer memory and data storage, information is stored using combinations of bits. For example, text, images, and videos are all stored as patterns of bits.\r\nThis is also the case for for computation, the way computers perform calculations, make decisions, and execute instructions is\r\ndone by manipulating bits in various ways."}),"\n",(0,a.jsx)(i.h2,{id:"boolean",children:"Boolean"}),"\n",(0,a.jsxs)(i.p,{children:["The boolean type can have one of two values, ",(0,a.jsx)("code",{children:"true"})," and ",(0,a.jsx)("code",{children:"false"}),". It is used for evaluating logical conditions, and is typically used\r\nfor comparisons or in control flow statements, such as if statements, while loops, for loops etc. all of which we will later go over in the Control Flow Page."]}),"\n",(0,a.jsx)(i.p,{children:"When a variable makes use of the boolean type, you would initialize it by setting it to true or false.\r\nIf you choose not to initialize the default value, it will automatically be assigned a false value."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"boolean bThisIsTrue = true;      // Initialized with the value true\r\nboolean bThisIsFalse = false;    // Initialized with the value false\r\nboolean bNotInitialized;         // Non-initialized so the values default is false\n"})}),"\n",(0,a.jsx)("code",{children:"Typically stored using 1 bit but this is not explicitly defined in Java"}),"\n",(0,a.jsx)(i.h2,{id:"char",children:"Char"}),"\n",(0,a.jsx)(i.p,{children:"The char type represents a single 16-bit Unicode character. It is mostly used to store individual characters, such as letters, digits, and symbols.\r\nAlthough these days there are now some Unicode characters that require two or more char values. This type serves as a fundamental type for working with textual\r\ndata in Java, enabling you to manipulate individual characters and process text effectively."}),"\n",(0,a.jsx)(i.p,{children:"When a variable makes use of the char type, you would initialize it by setting it via a character, number, symbol or hexadecimal value.\r\nIf you choose not to initialize the default value, it will automatically be assigned a null character value."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"char firstLetter = 'A';     // Initialized with the character 'A'\r\nchar digit = '3';           // Initialized with the character '3'\r\nchar symbol = '\xa3';          // Initialized with the character '\xa3'\r\nchar newLine = '\\n';        // Initialized with the newline character\r\nchar bNotInitialized;       // Non-initialized so the values default is '\\u0000' (Null character)\n"})}),"\n",(0,a.jsx)(i.p,{children:"A Unicode character is a standardized character encoding system that assigns a unique numeric value (code point) to every character used in written languages around the world.\r\nIt aims to provide a universal character set that can represent text in any language. In Java, you can also initialize a variable of type char via hexadecimal values like so."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"char firstLetter = '\\u0041';   // Initialized with the character 'A'\r\nchar digit = '\\u0033';         // Initialized with the character '3'\r\nchar symbol = '\\u00A3';        // Initialized with the character '\xa3'\r\nchar newLine = '\\u000A';       // Initialized with the newline character\r\nchar nullChar = '\\u0000';      // Initialized with the null character\n"})}),"\n",(0,a.jsx)("code",{children:"Occupies 16 bits"}),"\n",(0,a.jsx)(i.h2,{id:"byte",children:"Byte"}),"\n",(0,a.jsxs)(i.p,{children:["The byte type represents an 8-bit ",(0,a.jsx)(r.A,{text:"signed"})," integer. It can hold integer values ranging from -128 to 127. These types are most commonly used when memory\r\nconservation is required, dealing with raw binary data, or when there is a very small range of values expected."]}),"\n",(0,a.jsx)(i.p,{children:"If you choose not to initialize a byte variable, it will automatically be assigned a default value of 0.\r\nIf you choose to initialize a byte variable outside the types range, will result in a compilation error."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"byte smallNumber = 42;         // Initialized with the value 42\r\nbyte negativeNumber = -100;    // Initialized with the value -100\r\nbyte defaultValue;             // Non-initialized so the values default is 0\r\nbyte errorValue = 1000;        // Value is outside of the types range, would result in a compilation error\n"})}),"\n",(0,a.jsx)("code",{children:"Stored using 8 bits"}),"\n",(0,a.jsx)(i.h2,{id:"short",children:"Short"}),"\n",(0,a.jsxs)(i.p,{children:["The short type represents a 16-bit ",(0,a.jsx)(r.A,{text:"signed"})," integer. It can hold integer values ranging from -32,768 to 32,767. These types are commonly used when memory\r\nconservation is required or when dealing with data that falls within a moderate range of values."]}),"\n",(0,a.jsx)(i.p,{children:"If you choose not to initialize a short variable, it will automatically be assigned a default value of 0.\r\nAttempting to initialize a short variable outside of the types range, will result in a compilation error."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"short smallNumber = 5000;         // Initialized with the value 5000\r\nshort negativeNumber = -20000;    // Initialized with the value -20000\r\nshort defaultValue;               // Non-initialized so the values default is 0\r\nshort errorValue = 123456;        // Value is outside of the types range, would result in a compilation error\n"})}),"\n",(0,a.jsx)("code",{children:"Stored using 16 bits"}),"\n",(0,a.jsx)(i.h2,{id:"int",children:"Int"}),"\n",(0,a.jsxs)(i.p,{children:["The int type represents a 32-bit ",(0,a.jsx)(r.A,{text:"signed"})," integer. It can hold integer values ranging from -2,147,483,648 to 2,147,483,647.\r\nThese types are commonly used for general-purpose integer-based calculations and when dealing with data that requires a wider range of values."]}),"\n",(0,a.jsx)(i.p,{children:"If you choose not to initialize an int variable, it will automatically be assigned a default value of 0.\r\nAttempting to initialize an int variable outside of the types range, will result in a compilation error."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"int smallNumber = 5;              // Initialized with the value 5\r\nint negativeNumber = -2000000;    // Initialized with the value -2000000\r\nint defaultValue;                 // Non-initialized so the values default is 0\r\nint errorValue = 123456789;       // Value is outside of the types range, would result in a compilation error\n"})}),"\n",(0,a.jsx)("code",{children:"Stored using 32 bits"}),"\n",(0,a.jsx)(i.h2,{id:"long",children:"Long"}),"\n",(0,a.jsxs)(i.p,{children:["The long type represents a 64-bit ",(0,a.jsx)(r.A,{text:"signed"})," integer.\r\nIt can hold integer values ranging from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.\r\nThese types are commonly used when dealing with very large integer values or when a wider range of values is required compared to int."]}),"\n",(0,a.jsx)(i.p,{children:"If you choose not to initialize a long variable, it will automatically be assigned a default value of 0.\r\nAttempting to initialize a long variable outside of the types range, will result in a compilation error."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"long smallNumber = 100;           // Initialized with the value 100\r\nlong negativeNumber = -1250000;   // Initialized with the value -1250000\r\nlong defaultValue;                // Non-initialized so the values default is 0\r\nlong errorValue = 10000000000000000000000;   // Value is outside of the types range, would result in a compilation error\n"})}),"\n",(0,a.jsx)("code",{children:"Stored using 64 bits"}),"\n",(0,a.jsx)(i.h2,{id:"float",children:"Float"}),"\n",(0,a.jsx)(i.p,{children:"The float type represents a single-precision 32-bit floating-point number. It can hold decimal values with a precision of 7 digits.\r\nThese types are commonly used when dealing with decimal numbers that do not require high levels of precision, such as scientific calculations or representing fractional values,\r\nso for calculations in games that are usually approximated, they are widely used."}),"\n",(0,a.jsx)(i.p,{children:"To expand on what a float type is, take the number -1.2651111. We can split this up to the following:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["1 bit is used to represent the sign ",(0,a.jsx)("code",{children:"-"})]}),"\n",(0,a.jsxs)(i.li,{children:["8 bits for the Exponent ",(0,a.jsx)("code",{children:"1"})]}),"\n",(0,a.jsxs)(i.li,{children:["23 bits for the Mantissa ",(0,a.jsx)("code",{children:"2651111"})]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"IntelliJ Download",src:t(9705).A+"",width:"750",height:"304"})}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"This is a simplified explanation. If you're interested in learning more on this topic. Look into IEEE Standard 754 Floating Point Numbers."})}),"\n",(0,a.jsx)(i.p,{children:"A float has limited precision and can only represent a certain number of decimal places.\r\nAs the Exponent increases, so do the bits required to represent the value."}),"\n",(0,a.jsxs)(i.p,{children:["Take the value 12557.2651111, the Exponent has exceeded the 8 bits it originally had to represent its value. To store it, the number of bits representing\r\nthe Mantissa (decimal value) will need to reduce, therefore reducing its precision. In this case, it will be rounded to fit this new precision.\r\nSo storing 12557.2651111 would result in a float value of ",(0,a.jsx)("code",{children:"12557.265f"}),"."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"float smallNumber = 3.14f;          // Initialized with the value 3.1400000\r\nfloat negativeNumber = -123.45f;    // Initialized with the value -123.4500000\r\nfloat defaultValue;                 // Non-initialized so the values default is 0.0\r\nfloat errorValue = 1111111111111.1111111111111f;   // Value is outside of the types range, would result in a compilation error\n"})}),"\n",(0,a.jsx)("code",{children:"Stored using 32 bits"}),"\n",(0,a.jsx)(i.h2,{id:"double",children:"Double"}),"\n",(0,a.jsx)(i.p,{children:"The double type represents a double-precision 64-bit floating-point number. It can hold decimal values with a precision of approximately 15-16 digits.\r\nThese types are commonly used when dealing with decimal numbers that require higher levels of precision, such as financial calculations, scientific computations,\r\nor representing large or small quantities with high accuracy."}),"\n",(0,a.jsx)(i.p,{children:"To expand on what a double type is, let's consider the number -1.26511111212331. We can split this up as follows:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["1 bit is used to represent the sign ",(0,a.jsx)("code",{children:"-"})]}),"\n",(0,a.jsxs)(i.li,{children:["11 bits for the Exponent ",(0,a.jsx)("code",{children:"1"})]}),"\n",(0,a.jsxs)(i.li,{children:["52 bits for the Mantissa ",(0,a.jsx)("code",{children:"-"})]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"Much like the float, as the Exponent grows in size the decimal places become less precise. I won't go in to much more detail than this,\r\nthe concept is the same as the float but instead of single precision we have double precision allowing larger values in both the\r\nExponent and Mantissa."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"double smallNumber = 3.14f;          // Initialized with the value 3.1400000\r\ndouble negativeNumber = -123.45f;    // Initialized with the value -123.4500000\r\ndouble defaultValue;                 // Non-initialized so the values default is 0.0\n"})}),"\n",(0,a.jsx)("code",{children:"Stored using 64 bits"})]})}function u(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},6450:(e,i,t)=>{t.d(i,{A:()=>d});var a=t(6540);const n="tooltipContainer_klWT",r="tooltipBox_kLVV",s="textBox_o4OJ",o={"hello-world":"hello-world is a simple program used to introduce syntax, environment setup, and output functionality",gitbash:"GitBash is a terminal emulator for Git on Windows, facilitating version control and command-line operations",sourcetree:"SourceTree is a graphical Git client used for managing repositories, simplifying version control workflows visually",directx:"DirectX is an API framework facilitating advanced 3D graphics rendering for Windows, Xbox and Linux",vulkan:"Vulkan is a cross-platform API framework for high-performance 3D graphics rendering","data driven development":"Data-Driven Development is an approach where functionality is based on data, iterative development, and easy modification to empower designers","source control":"Source Control is a system managing changes to code, enabling collaboration, tracking history, and ensuring versioning",debugging:"Debugging in an IDE allows developers to identify and fix software issues efficiently with integrated tools",perforce:"Perforce is a version control system facilitating collaborative software development, particularly in game development environments",repository:"A repository, or repo, is a central location/database where all project files and their version history are stored",git:"Git is an open source control system for tracking changes in source code during software development",gitlab:"GitLab unlike GitHub is open-source, it is a web-based source control system",github:"A web-based platform for version control using Git, facilitating collaboration, code sharing, and project management among software developers","open-source":"Open-source software is publicly accessible code that can be freely inspected, modified, and distributed",ide:"IDE stands for Integrated Development Environment, they provide developers with tools for writing, debugging, and testing code","code completion":"Code Completion is a feature in IDEs that automatically suggests and completes code, variable names, methods, and other elements as you type","c++":"An advanced programming language, known for its high performance and low-level control, making it ideal performance-critical applications","c#":"A modern programming language developed by Microsoft, known for its strong support for object-oriented programming and its rich set of features",java:"A high-level, object-oriented programming language. Known for its simplicity, platform independence, and robustness",api:"Application Programming Interface, which provides a set of pre-defined functions, classes, and protocols. Streamlining the development process and promoting code reuse",jvm:"Java Virtual Machine, is an abstract computing machine that enables Java code to be executed regardless of platform",console:"A text-based interface for user-computer interaction, enabling text input and output, often used for program execution, system monitoring, and debugging","program arguments":"Flags or values that you can pass into an application. Can be viewed as inputs that can enable/disable certain features or functionality of an application","environment variables":"Variables that are part of the operating systems environment. They store information such as paths to important directories, system configurations, or user preferences",variable:"A symbolic name that represents a stored value in code",class:"A container defining variables and functionality to serve a specific purpose in an application or feature",abstraction:"The process of simplifying complex systems by focusing on essential properties while hiding unnecessary details",inheritance:"A feature of object-oriented programming where a new class inherits properties and behaviors (methods) from a given class",polymorphism:"A feature of object-oriented programming where different classes can be treated interchangeably, allowing flexible method behaviors that can be overridden in a hierarchical class structure",signed:"Signed data types reserve one bit to represent the sign of the value, allowing for both positive and negative values",unsigned:"Unsigned data types use all bits to represent the only positive values",operators:"Operators are symbols that perform operations on operands. They can be arithmetic (like +, -, *, /), relational (like ==, !=, >, <), logical (like &&, ||), and more",scope:"Scopes determine where a variable or a function can be accessed. There are two main types of scope: local and global","class instance":"A single occurrence of an object, created from a class. It has its own properties and methods",refactor:"Process of improving code structure without altering its functionality for better readability and maintainability"};var l=t(4848);const d=e=>{let{text:i,info:t}=e;const[d,c]=(0,a.useState)(!1),[h,u]=(0,a.useState)({x:0,y:0}),p=o[i.toLowerCase()],m=t||p||"Missing tool-tip!";let f=h.x+20+"px";if("undefined"!=typeof window&&h.x+20>window.innerWidth-300){let e=h.x/window.innerWidth;f=h.x-200*e+"px"}const g={position:"fixed",top:h.y+20+"px",left:f};return(0,l.jsxs)("span",{className:n,onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},onMouseMove:e=>{u({x:e.clientX,y:e.clientY})},children:[(0,l.jsx)("code",{className:s,children:i}),d&&(0,l.jsx)("div",{className:r,style:g,children:m})]})}},9705:(e,i,t)=>{t.d(i,{A:()=>a});const a="data:image/webp;base64,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"},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>o});var a=t(6540);const n={},r=a.createContext(n);function s(e){const i=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);