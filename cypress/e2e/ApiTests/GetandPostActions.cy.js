describe('API Test for JSONPlaceholder', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  it('Should fetch comments for post 1 and verify all have emails', () => {
    cy.request(`${baseUrl}/posts/1/comments`).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      response.body.forEach((comment, index) => {
        expect(comment).to.have.property('email');
      });
    });
  });


  it('should create a new post and verify the response', () => {
    // Define the new post data
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    // Make the POST request
    cy.request({ 
      method: 'POST', url: `${baseUrl}/posts/`,
      body: newPost,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).should((response) => {
      // Assert the status code
      expect(response.status).to.eq(201);

      // Assert the response body
      expect(response.body).to.have.property('id');
      expect(response.body).to.include({ title: newPost.title, body: newPost.body, userId: newPost.userId, id: 101});
    });
  });
});