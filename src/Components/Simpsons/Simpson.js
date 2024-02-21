const Simpson = ({prop}) => {
    const{name,photo}=prop;
    return (
        <div>
            <h2>{name}</h2>
            <img src={photo} alt={name}/>
            <hr/>
        </div>
    );
};

export {Simpson};