export function getConfig() {
    const config = useRuntimeConfig();

    return {
        ...config.public
    }
}