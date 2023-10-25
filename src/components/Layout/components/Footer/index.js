function Footer() {
    return (
        <div
            style={{
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
                textAlign: 'center',
            }}
        >
            <div>
                <img src="logo.png" width={50} />
            </div>
            <label>Developed by Level Team © 2022</label>
        </div>
    );
}

export default Footer;
