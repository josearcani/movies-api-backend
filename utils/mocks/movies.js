const moviesMock = [
  {
    "id": "2c53af74-0be4-4666-bf56-208325c03a48",
    "title": "Lock Up",
    "year": 1991,
    "cover": "http://dummyimage.com/236x167.png/ff4444/ffffff",
    "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "duration": 1991,
    "contentRating": "R",
    "source": "http://jalbum.net/blandit/nam/nulla/integer/pede.xml",
    "tags": ["Adventure|Comedy|Fantasy"]
  },
  {
    "id": "fb3e3c52-ad10-4c96-bb6a-eccc2d4e6354",
    "title": "Gordy",
    "year": 2001,
    "cover": "http://dummyimage.com/201x103.png/dddddd/000000",
    "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "duration": 1888,
    "contentRating": "G",
    "source": "https://paypal.com/porttitor/lorem/id/ligula/suspendisse/ornare/consequat.jsp",
    "tags": ["Comedy|Drama", "Drama|Musical|Romance|War", "Action|Adventure|Drama"]
  },
  {
    "id": "0bf2840a-a8cd-41a4-8d57-a64736486900",
    "title": "Scoop",
    "year": 2002,
    "cover": "http://dummyimage.com/248x213.png/5fa2dd/ffffff",
    "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "duration": 2060,
    "contentRating": "NC-17",
    "source": "https://yahoo.com/in/felis/donec/semper/sapien/a/libero.xml",
    "tags": ["Drama", "Comedy", "Documentary", "Drama"]
  },
  {
    "id": "240b3080-1194-4ae5-9576-16748f6706cb",
    "title": "Brothers, The",
    "year": 2011,
    "cover": "http://dummyimage.com/141x238.png/ff4444/ffffff",
    "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    "duration": 1929,
    "contentRating": "G",
    "source": "https://gnu.org/libero.js",
    "tags": ["Documentary", "Drama", "Crime|Drama|Mystery|Thriller", "Action|Drama|Sci-Fi", "Action|Adventure|Fantasy"]
  },
  {
    "id": "f9bf8a3d-08a4-4923-9ff1-27cbd370ce28",
    "title": "Chicago Massacre: Richard Speck",
    "year": 2007,
    "cover": "http://dummyimage.com/222x121.png/ff4444/ffffff",
    "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "duration": 1940,
    "contentRating": "G",
    "source": "https://woothemes.com/nunc/nisl.js",
    "tags": ["Horror|Thriller", "Drama", "Comedy", "Comedy|Drama"]
  },
  {
    "id": "e9738f20-d67a-46bd-bbef-82150c964f7a",
    "title": "Alien Abduction",
    "year": 1991,
    "cover": "http://dummyimage.com/110x221.png/ff4444/ffffff",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "duration": 2030,
    "contentRating": "PG",
    "source": "https://indiatimes.com/etiam.html",
    "tags": ["Drama", "Horror|Thriller", "Drama|Romance"]
  },
  {
    "id": "2c76b9ed-9d95-4452-8bf9-6b0de9217e57",
    "title": "Tokyo Gore Police (Tôkyô zankoku keisatsu)",
    "year": 1993,
    "cover": "http://dummyimage.com/150x210.png/5fa2dd/ffffff",
    "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "duration": 2032,
    "contentRating": "R",
    "source": "https://photobucket.com/sit/amet/eros/suspendisse/accumsan/tortor/quis.png",
    "tags": ["Drama|Musical", "War"]
  },
  {
    "id": "9d403f2c-ff14-4741-877e-0b87fb544a89",
    "title": "Vampire, The",
    "year": 1993,
    "cover": "http://dummyimage.com/238x186.png/ff4444/ffffff",
    "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "duration": 1943,
    "contentRating": "PG",
    "source": "http://cpanel.net/id/ligula.jpg",
    "tags": ["Comedy|Drama|Romance"]
  },
  {
    "id": "c28b6303-a121-41c5-afa7-ec7cb71d7fe1",
    "title": "Goofy Movies Number One",
    "year": 1999,
    "cover": "http://dummyimage.com/121x104.png/dddddd/000000",
    "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "duration": 2068,
    "contentRating": "NC-17",
    "source": "http://admin.ch/aliquam/quis/turpis/eget.jsp",
    "tags": ["Comedy", "Comedy|Musical|Romance", "Comedy|Drama"]
  },
  {
    "id": "0a6d5e6a-0016-4bd8-a230-e4d7582f48dc",
    "title": "Week-End in Havana",
    "year": 1994,
    "cover": "http://dummyimage.com/194x206.png/dddddd/000000",
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "duration": 1916,
    "contentRating": "PG",
    "source": "https://mysql.com/sapien/dignissim/vestibulum/vestibulum/ante/ipsum/primis.png",
    "tags": ["Western", "Comedy|Drama|Romance", "Comedy|Drama|Fantasy", "Drama", "Drama|Thriller"]
  }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = { 
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
};