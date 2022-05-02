export const initialState = {
  posts: {
    data: [
      /*{
        id: 1,
        title: 'Post 1',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'John Doe',
        status: 'published',
        photo: 'header1.jpg',
        phone: '111-222-333-444',
        location: 'Warsaw',
      },
      {
        id: 2,
        title: 'Post 2',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'Marry Poppins',
        status: 'published',
        photo: 'header2.jpg',
        phone: '111-222-333-444',
        location: 'Krakow',
      },
      {
        id: 3,
        title: 'Post 3',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'Kriss Slick',
        status: 'published',
        photo: 'header2.jpg',
        phone: '111-222-333-444',
        location: 'Wroclaw',
      },
      {
        id: 4,
        title: 'Post 4',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'Alan Poe',
        status: 'published',
        photo: 'header1.jpg',
        phone: '111-222-333-444',
        location: 'Lodz',
      },
      {
        id: 5,
        title: 'Post 5',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'Hannah Dividens',
        status: 'published',
        photo: 'header2.jpg',
        phone: '111-222-333-444',
        location: 'Warsaw',
      },
      {
        id: 6,
        title: 'Post 6',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'Hank Stone',
        status: 'published',
        photo: 'header1.jpg',
        phone: '111-222-333-444',
        location: 'Opole',
      },
      {
        id: 7,
        title: 'Post 7',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'Susan Broom',
        status: 'published',
        photo: 'header1.jpg',
        phone: '111-222-333-444',
        location: 'Warsaw',
      },
      {
        id: 8,
        title: 'Post 8',
        summary: 'Post summary post summary',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius feugiat volutpat. Proin a finibus turpis, quis rutrum ante.',
        publishedDate: '29/04/2022',
        updatedDate: '30/04/2022',
        email: 'mail@mailo.com',
        author: 'Ian McGregor',
        status: 'published',
        photo: 'header2.jpg',
        phone: '111-222-333-444',
        location: 'Warsaw',
      },*/
    ],
    loading: {
      active: false,
      error: false,
    },
    filters: { author: { _id: '28340' }
},
  },
  user: {
    loggedIn: true,
    name: 'Jessy',
    email: 'testomail@mail.com',
    location: 'Warsaw',
    role: 'user',
    id: '526ag79h2ch5j34319jjpq36',
    loading: {
      active: true,
      error: false,
    },
  },
};
