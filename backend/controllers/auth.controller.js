export const signup = async (req, res) => {
    try {
        const {fullName, password,confirmPassword, email,gender} = req.body;
    } catch (error) {
        console.log(error);
    }
};

export const login = (req, res) => {
    res.send('loginUser');
}

export const logout = (req, res) => {
    res.send('logoutUser');
}
