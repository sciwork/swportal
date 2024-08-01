===========================================
Scisprint 2024 August in COSCUP
===========================================

:date: 2024-07-24 20:00
:url: sprint/2024/08-coscup
:save_as: sprint/2024/08-coscup.html

Date
-----

* Date: 3rd August, Saturday, 2024
* Time: 11:30 -- 16:00

|

Agneda 
-------
* 11:20-11:30 Opening

* 11:30-12:00 Project introduction

* 12:00-13:00 `Career roundtable <#career-roundtable>`__ | Project coding session

* 13:10-13:40 Technical talk: `Packet Party: Getting Down and Dirty with PcapPlusPlus <#packet-party-getting-down-and-dirty-with-pcapplusplus>`__

* 13:40-14:10 Technical talk: `A High-Efficiency Natural Selection Simulator with Pybind11 <#a-high-efficiency-natural-selection-simulator-with-pybind11>`__

* 14:40-14:50 Technical talk: `Explore Practical Scientific Applications of Open-Source Large Language Models: RAG Knowledge Management and LLM Servitization Methods <#explore-practical-scientific-applications-of-open-source-large-language-models-rag-knowledge-management-and-llm-servitization-methods>`__

* 14:50-15:00 Break

* 15:00-15:45 Project coding session

* 15:45-15:55 Project sharing

* 15:55-16:00 Closing

|

About scisprint @ COSCUP
--------------------------------

We will host a scisprint in `COSCUP <https://coscup.org/2024/zh-TW/>`__. In this event, it will include 
a `hacking session <#hacking-session>`__, `career roundtable <#career-roundtable>`__ and 
`technical talks <#technical-talks>`__.

To join the sprint, please bring your laptop. You are also very welcome to bring your project. 
Please `contact us <#contact-us>`__ if you have any questions.

Scisprint, hosted by the sciwork community, is a monthly coding sprint. It would like to 
facilitate discussions and exchanges among people in the fields of science, numerical 
computation, and engineering. Participants, regardless of experience level, can gain valuable 
development insights in this event.

We would like to provide a supportive and friendly environment for all attendees to support more developers
to join in the open-source communities. 

Hacking Session
------------------

It aims to encourage collaboration and interaction among developers through project 
participation. The projects cover various fields, including but not limited to science, 
numerical computation, and engineering. You are also encouraged to share your own projects 
in scisprint. Refer to `project list <#project-list>`__ below for more details.

Project List
+++++++++++++

modmesh
^^^^^^^^^

- **Related Subjects:** Python, C++, PDE
- **Project Link:** `Github <https://github.com/solvcon/modmesh>`__
- **Project Contact:** Yung-Yu Chen (discord: @yyc#7718)

modmesh seamlessly mixes C++ and Python through pybind11, allowing you to leverage the strengths of 
both programming languages for efficient PDE solving. We use Qt and Python to visualize the computation 
results to give you a better understanding of your PDE solution. modmesh also supports mesh visualization, 
currently in the Gmsh mesh file format. We have recently made efforts to improve the modmesh UI/UX.

The design allows it to run on Windows, Linux, and MacOS. Everyone can use or contribute to modmesh.

uTensor
^^^^^^^^

- **Project Link:** `GitHub <https://github.com/uTensor/uTensor>`__
- **Project Contact:** Dboy(discord: @dboyliao#1295)

uTensor is an extremely lightweight machine learning inference framework built on C++11. It simplifies model 
deployment by seamlessly converting TensorFlow-trained models into efficient C++ files that can be used to infer 
on the embedding device and integrate with optimized libraries such as CMSIS-NN by ARM with ease. Compared with 
the binary files, C++ source code will provide greater flexibility to modify the trained model for the embedding engineers. 

We provide the defaults for tensors, operators, and memory allocation. Just like the booming development of 
machine learning, we are also actively developing the above functions. Welcome to join us.

sciwork portal
^^^^^^^^^^^^^^^

- **Project Link:** `GitHub <https://github.com/sciwork/swportal>`__
- **Project Contact:** Aya yu (discord: @tN#6722), Chester (discord: @chester), Wuxian (discord: @5x9527)

Sciwork Portal is a project for maintaining our official website - Sciwork.dev, which was built by Pelican 
with tailwindCSS, and deployed by Netfliy. We create the promotional pages for meetup and sprint events. Our 
team also maintains the sciwork conference page - conf.sciwork.dev.

We have always been actively trying to provide users a better web browsing experience, including information 
presentation and visual experience. Welcome to join us if you are interested in website maintence.

pydoccht
^^^^^^^^^

- **Project Link:** `Github <https://github.com/python/python-docs-zh-tw>`__
- **Project Contact:** Matt Wang (@mattwang44), Josix (@Josix#3800)

Our primary mission is to make Python's official documentation accessible to the Traditional Chinese audience by providing accurate and comprehensive translations. 
Whether you are a seasoned Python developer or a language expert, 
we welcome individuals who are enthusiastic about Python and passionate about making knowledge accessible to all.


pyLiteracy
^^^^^^^^^^^

- **Project Link:** `GitHub <https://github.com/Chenct-jonathan/Loc_zai_and_Rep_zai_parser>`__
- **Project Contact:** Jonathan Chen (discord: @陳畯田), PeterWolf (discord: @PeterWolf#1422)

Mandarin grammar parser based on syntactical context. By analyzing and simplifying the structures of correct 
usages into code instructions, provide a linguistics-based model to accomplish efficient Mandarin grammar 
checking tasks with minimal resources.

Commitizen-Tools
^^^^^^^^^^^^^^^^^

- **Project Link:** `GitHub <https://github.com/commitizen-tools/commitizen>`__
- Project Contact: Wei Lee (discord: @clleew#6749)


Commitizen-tools allows teams to effectively implement version control that conforms to the specified rules. 
It uses interactive forms to create commit messages that meet conventional commits rules. It also bumps versions automatically using Semantic Versioning and generates a changelog using Keep a Changelog.

In addition, you can also customize your own rules to suit your team. Commitizen-tools is a widely used tool in many communities. We still have a lot of issues to fix and develop. Welcome to join us.

Career Roundtable
----------------------

Career roundtable is to have a relaxed discussions with experienced software professionals. 
At this time, we invited many professional software engineers as our mentor. 
If you have career-related questions or seek for some guidances, do not miss out this chance!
 
.. raw:: html

    <div class="flex flex-row flex-wrap">
        <img width="50%" alt="masters for career roundtable in coscup" src="../../images/coscup-CareerRoundtable-1.jpeg" >
        <img width="50%"  alt="masters for career roundtable in coscup" src="../../images/coscup-CareerRoundtable-2.jpeg" >
    </div>


Technical Talks
-------------------

Packet Party: Getting Down and Dirty with PcapPlusPlus
+++++++++++++++++++++++++++++++++++++++++++++++++++++++

- **Speaker**: Anchi Liu
- **About speaker**: 
    Liu works as a software engineer in Mujin, Inc., Tokyo, Japan. He uses @tigercosmos as the 
    name in the open-source world, and his Chinese nickname is “微中子.” He holds an M.S. degree in Computer Science 
    from National Yang Ming Chiao Tung University (NYCU) in 2022, Taiwan. He got a B.S. degree in 
    Bio-Industrial Mechatronics Engineering from National Taiwan University (NTU) in 2019.
- **Abstract**:
    PcapPlusPlus is a cross-platform C++ library capable of packet interception, parsing, and construction. 
    Additionally, it offers a range of functionalities such as implementing various network protocols, supporting 
    DPDK, and providing simplified packet filtering. The presentation will cover the principles of PcapPlusPlus 
    and libpcap, the speaker’s contributions to PcapPlusPlus, and some cases studies. 

|

A High-Efficiency Natural Selection Simulator with Pybind11
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

- **Speaker**: YJack
- **About speaker**: 
    我是 YJ，不活躍於各大論壇，組織過最大的東西是跟朋友的讀書會。但是我還是在學校、競賽、專案的過程還是學會了很多東西。
    所以不管對於我個人或是專案有各種問題都可以來找我聊聊或是討論喔！
- **Abstract**:
    This presentation introduces SimEvo, a natural selection simulator with a core engine implemented in C++ 
    for functionality and algorithms, and a simple Python interface provided via Pybind11. SimEvo allows users 
    to simulate ecosystems where organisms react, interact, and reproduce based on genetic traits. I will 
    showcase the project architecture, explaining how computationally intensive parts are handled in C++ and 
    how the main APIs are ported to Python, enabling users to easily customize different scenarios through 
    scripting. 

|

Explore Practical Scientific Applications of Open-Source Large Language Models: RAG Knowledge Management and LLM Servitization Methods 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

- **Speaker**: 劉育維 Simon Liu
- **About speaker**:
    大家好，我是 Simon 劉育維，過去曾擔任過電信業的資深工程師 和 在軟體業擔任 MLOps 客戶技術成功工程師，
    幫助各大知名企業進行機器學習、深度學習、大型語言模型等人工智慧議題進行人工智慧架構規劃的討論，目前在 Medium 上已經公開超過 70 
    篇技術文章，我希望能夠嘗試使用 AI 做應用，幫助客戶用 AI 解決痛點。
- **Abstract**: 
    自 2022 年底起，隨著 AI 技術的快速進展，大型語言模型（LLMs）已成為業界與學術界矚目的焦點。本次演講，
    我將以最淺顯的方式，引領大家深入了解大型語言模型在實務應用中的關鍵技術與策略，涵蓋 RAG（Retrieval-Augmented Generation）
    知識管理、LLM 的服務化，以及模型微調（Fine-Tune）這三大領域，在此次演講，我將帶來深入RAG 知識管理和 LLM 服務化，
    讓大家能夠以最快的速度，了解如何導入 LLM 應用。

    首先，我們將探討 RAG 如何藉由結合檢索（Retrieval）與生成（Generation）技術，提升 LLMs 的專業知識理解能力，
    使模型能有效處理大量資料並提供更精準的解答。隨後，我們將分析將 LLM 轉化為服務（LLM as a service）的重要性，
    探討如何將這些強大的模型轉化為便於接入與使用的服務，使更多企業與開發者得以運用這些尖端技術進行創新與問題解決。

    透過上面兩個維度的深入剖析，聽眾將以最易理解的方式入門 LLMs 的核心知識，為後續深入探索 LLMs 應用提供堅實的基礎，
    進而為未來技術創新與應用開拓更廣闊的視野。


Venue
-----

`NTUST TR Building Room TR513 (國立臺灣科技大學研揚大樓 513 教室) <https://maps.app.goo.gl/EmJSv27Qrs8zp4EVA>`__.

.. raw:: html

  <div style="overflow:hidden; padding-bottom:56.25%; position:relative; height:0;">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14462.247118839012!2d121.5427259!3d25.0150024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa23fdb8fd51%3A0xf6126da2dfe50537!2sNTUST%20TR%20Building!5e0!3m2!1sen!2stw!4v1721822569889!5m2!1sen!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

|

Contact us
----------

* sciwork: https://sciwork.dev/
* discord: https://discord.gg/6MAkFrD
* email: `contact@sciwork.dev (subject: I want to lead a project in scisprint) <mailto:contact@sciwork.dev?subject=[sciwork]%20I%20want%20to%20lead%20a%20project%20in%20scisprint>`__
* flickr: https://www.flickr.com/photos/sciwork/albums
