export let quest = [
    {
        id: 0,
        key: 'a0',
        type: 0,
        npc: 'Hoa Hoa',
        quest: 3800,
        cond: null,
        result: '5 thit_heo',
        status: (localStorage.getItem('a0') || 0),
        
        doing: [
            ['Chị bảo em chạy đến cuối bản đồ cơ mà, đừng gian lận đấy nhé!', true],
            ['Ai gian lận đâu, hừ hừ...', false]
        ],
        
        start: [
            ['Chào em!', true],
            ['Em mới đến thế giới này à', true],
            ['Em mới rơi từ trên trời xuống, em cũng không nhớ gì cả', false],
            ['Thế giới này là một thế giới giả lập, ở đây chỉ có chị và em thôi', true],
            ['Có một kẻ đứng sau đang phát triển thế giới này, nhưng có vẻ kiến thức của hắn không đủ dùng', true],
            ['Vậy nên em được cử đến nơi đây, cứu vớt thế giới này!', true],
            ['Nhưng em phải làm gì bây giờ', false],
            ['Em chỉ cần làm các nhiệm vụ mà chị giao cho là được, sau đó tìm ra lỗi và gửi về email tonykms210@gmail.com', true],
            ['Oke chị nhaaaaa, vậy hãy giao cho em nhiệm vụ đầu tiên đi!', false],
            ['Được thôi, nhiệm vụ đầu tiên của em là chạy đến cuối bản đồ rồi trở lại đây :))', true],
            ['Ơ... Nghe có vẻ vớ vẩn nhưng thôi em sẽ làm vậy. Em nhận nhiệm vụ này', false],
            ['Okee em nhaaaaaaa, đi sớm về sớm nhé! ^^', true]
        ],
        
        end: [
            ['Giỏi lắm em trai! ^^', true],
            ['Ahihi', false],
            ['Đây là phần thưởng cho sự năng động của em', true]
        ]
    },
    
    {
        id: 1,
        key: "a1",
        type: 1,
        npc: 'Hoa Hoa',
        quest: 'Quả Quả',
        cond: "a0",
        result: '100 gold',
        status: (localStorage.getItem('a1') || 0),
        
        doing: [
            ['Chị Quả Quả khá là dễ thương đó, em mà cua được là sướng lắm đấy nhé', true],
            ['Nhưng em thích chị hơn', false],
            ['Chị già rồi mà mày cũng không tha hả??? Đi làm nhiệm vụ tiếp đê!', true]
        ],
        
        start: [
            ['Thịt có ngon không em trai', true],
            ['Thịt chị trông có vẻ ngon :))', false],
            ['Bậy nào, ăn no rồi thì làm nhiệm vụ tiếp thôi', true],
            ['Em hãy đi gặp chị Quả Quả ở đầu bên kia bản đồ nhé, đó là em gái chị ^^', true],
        ],
        
        end: [
            ['Thế nào, chị Quả Quả dễ thương chứ ^^', true],
            ['Chị ấy có tặng em quà gì không', true],
            ['Chị ấy chỉ khen em đẹp trai thôi', false],
            ['Đẹp con khỉ á, bụng bự. Chị Quả Quả gửi cho chị 100 đồng vàng để đưa cho em này', true],
            ['Tiền này dùng để làm gì hả chị', false],
            ['Hiện tại chưa biết dùng để làm gì, nhưng mà chờ ông dev cập nhật hệ thống cửa hàng bla bla thì sẽ dùng đến đấy em', true],
            ['Thế nhé, giờ thì đi gặp chị Quả Quả đi. Định nhận tiền không của người ta hả :v', true],
            ['Oke Chị', false]
        ],
        
        finish: [
            ['Chào cưng, em mới đến thế giới này à', true],
            ['Chị Hoa Hoa bảo em đến gặp chị', false],
            ['Ồ, chị Hoa Hoa xinh gái đó hả, chị ấy có nói rằng chị dễ thương không T_T', true],
            ['Chị dễ thương', false],
            ['Woa cảm ơn cưng đẹp trai ^^', true],
            ['Thôi trả em về với chị Hoa Hoa đấy, không chị ấy giết chị mất', true],
            ['Bye bye chị', false]
        ]
    },
];