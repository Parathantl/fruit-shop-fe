export const getCookie = (name: string): string | null => {
    const nameEQ = `${encodeURIComponent(name)}=`;
    const cookies = document.cookie.split(';');
  
    for (const cookie of cookies) {
      const trimmedCookie = cookie.trim(); // Remove leading/trailing spaces
      if (trimmedCookie.startsWith(nameEQ)) {
        return decodeURIComponent(trimmedCookie.substring(nameEQ.length)); // Extract and decode cookie value
      }
    }
    
    return null; // Return null if cookie not found
  };
  