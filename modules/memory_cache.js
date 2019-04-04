class MemoryCache{
    constructor(lifespan){
        this.lifespan = lifespan; // seconds
        this.cache = {};
    }

    set(key, value){
        let expires = new Date();
        expires.setSeconds(expires.getSeconds() + this.lifespan);

        if(this.cache.hasOwnProperty(key)){
            this.cache[key].value = value;
            this.cache[key].expires = expires;
            return;
        }

        let entry = {
            value,
            expires
        }

        this.cache[key] = entry;
    }

    get(key){
        if(this.cache.hasOwnProperty(key)){
            let now = new Date();
            let entry = this.cache[key];
            let expires = entry.expires;
            if(now >= expires){
                // this cache entry has expired
                delete this.cache[key];
                return null;
            }
            return entry.value;
        }
        return null;
    }
}

module.exports = MemoryCache;