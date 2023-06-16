type BinItem = Instance | RBXScriptConnection | (() => void);

/**
 * Adds item to Bin.
 * ```ts
 * const Part: Part = Add(new Instance("Part"));
 *
 * Add(Part.Touched.Connect(() => {
 *     print("Touched!");
 * }));
 *
 * Add(() => {
 *     print("Emptying bin!");
 * });
 * ```
 * @param Item
 */
declare function Add<T extends BinItem>(Item: T): T;

/**
 * Empties the Bin - destroys added instances, disconnects added connections, calls added functions.
 */
declare function Empty(): void;

/**
 * Manages cleanup for objects that cannot be garbage collected.
 * This function creates a Bin, and returns two functions. The first can be used to add items to the bin, and the second can be used to "empty" the bin,
 * destroying all the items in it.
 * ```ts
 * const [Add, Empty] = Bin();
 *
 * const Part: Part = Add(new Instance("Part"));
 *
 * Add(Part.Touched.Connect(() => {
 *     print("Touched!");
 * }));
 *
 * Add(() => {
 *     print("Emptying bin!");
 * });
 *
 * Empty()
 * ```
 */
declare function Bin(): LuaTuple<[typeof Add, typeof Empty]>;

declare namespace Bin {
    export { BinItem };
}

export = Bin;
