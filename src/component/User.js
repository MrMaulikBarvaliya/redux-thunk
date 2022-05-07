import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { GET_LEARN_MORE } from "../redux/constantan/userConstant";
// import { Link } from "react-router-dom";

const User = ({ users }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleLearnMore = (i) => {
    alert("hello" + i);
    // navigate('/product')
    dispatch(GET_LEARN_MORE(i));
    alert("Second");
  };

  return (
    <>
      <h1 className="text-center text-info">Photos </h1>
      <div className="container">
        <div className="row">
          {users.map((user, index) => (
            <>
              <div className="col-12 col-lg-3 my-3" key={index}>
                <div>
                  <Card style={{ width: "20rem" }}>
                    <Card.Header style={{background:'#e0e0e0',fontWeight:'600',fontSize:'20px'}}>{user.albumId}</Card.Header>
                    <Card.Img variant="top" src={user.thumbnailUrl} />
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        src={user.url}
                        style={{ width: "100px", height: "50px" }}
                        alt="imgUrl"
                      />
                      <Card.Text className="text-center fw-bold">{user.id}</Card.Text>
                      <Card.Title>{user.title}</Card.Title>
                      <Card.Text className="text-center">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button
                        variant="light"
                        onClick={() => handleLearnMore(user)}
                      >
                      Go More
                       {/* <Link to={`/product/${user.id}`} className="btn btn-primary"> Go Learn</Link> */}
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default User;
