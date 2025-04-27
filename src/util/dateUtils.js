const getFormattedDate = (dateStr) => {
    const [month, day, year] = dateStr.split('/');
    const newDate = new Date(year, month - 1, day);

    const mm = String(newDate.getMonth() + 1).padStart(2, '0');
    const dd = String(newDate.getDate()).padStart(2, '0');
  
    return `${newDate.getFullYear()}-${mm}-${dd}`;
  };
  
  export { getFormattedDate };
  