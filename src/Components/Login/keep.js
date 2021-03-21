<div style={{ marginTop: "200px" }}>
      <Card
        style={{
          display: "flex",
          width: "700px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <Card.Body>
          <h2 className="text-center mb-4"> {newUser ? "Sign Up" : "Login"}</h2>
          <Form className="container-fluid" onSubmit={handleSubmit}>
            {newUser && (
              <Form.Group id="name" className="px-2 py-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  required
                />
              </Form.Group>
            )}
            <Form.Group id="email" class="px-2 py-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onBlur={handleBlur}
                placeholder="Your Email address"
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onBlur={handleBlur}
                placeholder="Your Password"
                required
              />
            </Form.Group>
             <Form.Group>
               <Form.Check type="checkbox" label="remember Me"/>
               <br/>
               <input
              type="checkbox"
              onChange={() => setNewUser(!newUser)}
              name="Create new Account"
              id=""/>
              <label htmlFor="newUser">Create New Account</label>
              <br/>
        {/* <input type="submit" value={newUser ? 'Sign up' : 'Log in'}/>  */}
        <Button type="submit">{newUser ? 'Sign up' : 'Log in'}</Button>
             </Form.Group>
           </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
  </div>
      <div
        style={{
          textAlign: "center",
          // marginLeft: "500px",
          borderRadius: "50px",
          margin: "20px 10px 20px 450px",
        }}
      >
        <Button
          variant="primary"
          size="md"
          block
          style={{ width: "350px", height: "40px" }}
          onClick={googleSignIn}
        >
          Continue with Google
        </Button>
        <Button
          variant="secondary"
          size="md"
          block
          style={{ width: "350px", height: "40px" }}
          onClick={fbSignIn}
        >
          Continue with Facebook
        </Button>
        <p style={{ color: "red" }}>{user.error}</p>
        {user.success && (
          <p style={{ color: "green" }}>
            User {newUser ? "created" : "Logged In"} successfully
          </p>
        )}
       
      </div>
    </div>