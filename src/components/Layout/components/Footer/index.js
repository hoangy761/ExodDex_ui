function Footer() {
    return (
        <div
            className="bg-secondary p-2"
            style={{
                width: '100%',
                textAlign: 'center',
            }}
        >
            <div>
                <img src="logo.png" width={50} alt="Logo" />
            </div>
            <label>Developed by ExodDex Team © 2023</label>
        </div>
    );
}

export default Footer;
