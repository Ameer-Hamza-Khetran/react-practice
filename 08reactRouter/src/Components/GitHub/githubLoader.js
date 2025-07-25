export const githubLoader = async () => {
    const response = await fetch(
        "https://api.github.com/users/Ameer-Hamza-Khetran"
    );
    return response.json();
};
