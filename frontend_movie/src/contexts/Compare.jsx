import { createContext, useState, useContext, useEffect } from "react";

const CompareContext = createContext();

export const useCompareContext = () => useContext(CompareContext); //custom hook

export const CompareProvider = ({ children }) => {
    const [compareItems, setCompareItems] = useState(() => {
        const storedCompareItems = localStorage.getItem("compareItems");
        return storedCompareItems ? JSON.parse(storedCompareItems) : [];
    })

    useEffect(() => {
        localStorage.setItem("compareItems", JSON.stringify(compareItems));
    }, [compareItems]);

    const addToCompare = (item) => {
        setCompareItems((prev) => {
            if (!item?.id) return prev; // Ensure item has an ID
            if (!prev.some((i) => i.id === item.id && i.type === item.type)) {
                return [...prev, item];
            }
            return prev; // Item already exists, do not add again
        });
    }

    const removeFromCompare = (itemId) => {
        setCompareItems((prev) => prev.filter((item) => item.id !== itemId));
    };

    const isCompared = (itemId) => {
        return compareItems.some((item) => item.id === itemId);
    };

    const clearCompare = () => {
        setCompareItems([]);
    };

    const value = {
        compareItems,
        addToCompare,
        removeFromCompare,
        isCompared,
        clearCompare
    };

    return (
        <CompareContext.Provider value={value}>
            {children}
        </CompareContext.Provider>
    );
}