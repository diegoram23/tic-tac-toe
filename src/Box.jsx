
const Box = ({ id, on, toggle }) => {

  const styles = {
    backgroundColor: on ? 'black' : 'white'
  }


  return (
    <div
      className="box"
      style={styles}
      onClick={() => toggle(id)}
    >

    </div>
  );
}

export default Box;