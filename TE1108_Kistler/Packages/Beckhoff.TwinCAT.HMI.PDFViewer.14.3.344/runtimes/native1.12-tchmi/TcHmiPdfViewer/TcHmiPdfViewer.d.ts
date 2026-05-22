// Compatibility file for non-module typescript compiles without adjustments.
// Use the following line for modern code (needs adjustments to tsconfig.json#configOptions/paths)
// import { TcHmiControl } from "Beckhoff.TwinCAT.HMI.Framework/index.esm.js";
// ***************************************************************************

export declare enum CursorTool {
    SELECT = 0,
    HAND = 1
}
declare class TcHmiPdfViewer extends TcHmi.Controls.System.TcHmiControl {
    #private;
    /**
     * Constructor
     * @param element
     * @param pcElement
     * @param attrs
     */
    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
    protected __viewerPath: string;
    protected __elementTemplateRoot: JQuery;
    protected __elementIFrame: JQuery<HTMLIFrameElement>;
    protected __file: string | null | undefined;
    protected __page: number | null | undefined;
    protected __namedDestination: string | null | undefined;
    protected __zoom: 'auto' | 'page-fit' | 'page-width' | 'page-height' | string | null | undefined;
    protected __pageMode: 'none' | 'thumbs' | 'bookmarks' | 'attachments' | null | undefined;
    protected __allowFullscreen: boolean | undefined;
    protected __disallowFileOperations: boolean | undefined;
    protected __cursorTool: CursorTool | undefined;
    /**
     * If raised, the control object exists in control cache and constructor of each inheritation level was called.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __previnit(): void;
    /**
     * If raised, all attributes have been set to it's default or dom values.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __init(): void;
    /**
     * Is called after the control instance gets part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __attach(): void;
    /**
     * Is called after the control instance is no longer part of the current DOM.
     * This function is only to be used by the System. Other function calls are not intended.
     */
    __detach(): void;
    /**
     * Destroy the current control instance.
     * Will be called automatically if system destroys control!
     */
    destroy(): void;
    protected __onIFrameLoaded(_event: Event): void;
    /**
     * Configure viewer while the init phase (aka within webviewerloaded event)
     * @param event
     * @returns
     */
    protected __onWebviewerloaded(event: CustomEvent<{
        source: PdfjsWindow & typeof globalThis;
    } | undefined>): void;
    /**
     * Note: Locale update needs reload of the whole iframe
     */
    protected __updatePdfLocale(): void;
    /**
     * Update Theme of pdfviewer (and reload iframe) if needed.
     * @returns
     */
    protected __updatePdfTheme(): void;
    /**
     * Calculates absolute file path based on this.__file
     */
    protected getFileAbsolute(): string;
    /**
     * Updates the viewer based on known attribute values.
     */
    protected __processViewerUpdate(): void;
    /**
     * Sets the File attribute to a new value.
     * @param valueNew The new value for the File attribute;
     */
    setFile(valueNew: string | null): void;
    /**
     * Returns the current value of the File attribute.
     */
    getFile(): string | null | undefined;
    /**
     * Processes the current value of attribute File.
     */
    protected __processFile(): void;
    /**
     * Sets the Page attribute to a new value.
     * @param valueNew The new value for the Page attribute;
     */
    setPage(valueNew: number | null): void;
    /**
     * Returns the current value of the Page attribute.
     */
    getPage(): number | null | undefined;
    /**
     * Processes the current value of attribute Page.
     */
    protected __processPage(): void;
    /**
     * Returns the current value of the PageCount attribute.
     */
    getPageCount(): number | null;
    /**
     * Sets the NamedDestination attribute to a new value.
     * @param valueNew The new value for the NamedDestination attribute;
     */
    setNamedDestination(valueNew: string | null): void;
    /**
     * Returns the current value of the NamedDestination attribute.
     */
    getNamedDestination(): string | null | undefined;
    /**
     * Processes the current value of attribute NamedDestination.
     */
    protected __processNamedDestination(): void;
    /**
     * Sets the Zoom attribute to a new value.
     * @param valueNew The new value for the Zoom attribute;
     */
    setZoom(valueNew: 'auto' | 'page-fit' | 'page-width' | 'page-height' | string | null): void;
    /**
     * Returns the current value of the Zoom attribute.
     */
    getZoom(): string | null | undefined;
    /**
     * Processes the current value of attribute Zoom.
     */
    protected __processZoom(): void;
    /**
     * Sets the PageMode attribute to a new value.
     * @param valueNew The new value for the Zoom attribute;
     */
    setPageMode(valueNew: 'none' | 'thumbs' | 'bookmarks' | 'attachments' | null): void;
    /**
     * Returns the current value of the Zoom attribute.
     */
    getPageMode(): "none" | "thumbs" | "bookmarks" | "attachments" | null | undefined;
    /**
     * Processes the current value of attribute Zoom.
     */
    protected __processPageMode(): void;
    /**
     * Sets the value of AllowFullscreen
     * @param valueNew The new value
     */
    setAllowFullscreen(valueNew: boolean | null): void;
    /**
     * Gets the value of AllowFullscreen
     * @returns The current value of AllowFullscreen
     */
    getAllowFullscreen(): boolean | undefined;
    /**
     * Processes AllowFullscreen
     */
    protected __processAllowFullscreen(): void;
    /**
     * Sets the value of DisallowFileOperations
     * @param valueNew The new value
     */
    setDisallowFileOperations(valueNew: boolean | null): void;
    /**
     * Gets the value of DisallowFileOperations
     * @returns The current value of DisallowFileOperations
     */
    getDisallowFileOperations(): boolean | undefined;
    /**
     * Processes AllowFullscreen
     */
    protected __processDisallowFileOperations(): void;
    /**
     * Sets the value of CursorTool
     * @param valueNew The new value
     */
    setCursorTool(valueNew: Capitalize<Lowercase<keyof typeof CursorTool>> | CursorTool | null): void;
    /**
     * Gets the value of CursorTool
     * @returns The current value of CursorTool
     */
    getCursorTool(): CursorTool | undefined;
    /**
     * Processes CursorTool
     */
    protected __processCursorTool(): void;
    static CursorTool: typeof CursorTool;
}
interface PdfjsWindow extends Window {
    /** Initial options */
    PDFViewerApplicationOptions?: {
        get<K extends keyof PreferenceKeys>(prefname: K): PreferenceKeys[K];
        /** Usable only pre pdfviewer init */
        set<K extends keyof PreferenceKeys>(prefname: K, value: PreferenceKeys[K]): void;
    };
    PDFViewerApplication?: {
        /** Runtime options */
        preferences?: {
            get<K extends keyof PreferenceKeys>(prefname: K): Promise<PreferenceKeys[K]>;
            /**
             * Note: Values will be used at the next load at a confusing timing.
             * Adjust PDFViewerApplicationOptions while init instead.
             * @deprecated Do not use this API.
             */
            set<K extends keyof PreferenceKeys>(prefname: K, value: PreferenceKeys[K]): Promise<void>;
        };
        /** The viewer has now been initialized. */
        initializedPromise: Promise<void>;
        /** Viewer has been loaded. File is perhaps not rendered right now. */
        initialized: boolean;
        /** PDF document has been loaded *and* rendered. Note: This is false if no file is loaded. */
        isInitialViewSet: boolean;
        open: (args: {
            url?: string | URL;
            data?: Uint8Array;
        }) => Promise<void>;
        close: () => Promise<void>;
        page: number;
        pagesCount: number;
        pdfViewer: {
            /** PDF document page views has been loaded. */
            pageViewsReady: boolean;
            /** The PDF document page views has been loaded. */
            pagesPromise: Promise<void>;
        };
        zoomIn: (steps: number, scaleFactor: number) => void;
        zoomOut: (steps: number, scaleFactor: number) => void;
        zoomReset: (steps: number, scaleFactor: number) => void;
        pdfCursorTools: {
            switchTool: (tool: CursorTool) => void;
        };
        eventBus: {
            on: (eventName: string, listener: (data: unknown) => void, options?: null | {
                once: boolean;
            }) => void;
            off: (eventName: string, listener: (data: unknown) => void, options?: null | {
                once: boolean;
            }) => void;
        };
    };
}
export interface PreferenceKeys {
    disablePreferences: boolean;
    locale: string;
    annotationMode: number;
    defaultZoomValue: string;
    cursorToolOnLoad: CursorTool;
    viewerCssTheme: ViewerCssTheme;
}
export declare const enum ViewerCssTheme {
    AUTOMATIC = 0,// Default value.
    LIGHT = 1,
    DARK = 2
}
export { TcHmiPdfViewer as Control };
declare const _TcHmiPdfViewer: typeof TcHmiPdfViewer;
type tTcHmiPdfViewer = TcHmiPdfViewer;
type tCursorTool = CursorTool;
declare global {
    namespace TcHmi.Controls.Beckhoff {
        const TcHmiPdfViewer: typeof _TcHmiPdfViewer;
        type TcHmiPdfViewer = tTcHmiPdfViewer;
        namespace TcHmiPdfViewer {
            type CursorTool = tCursorTool;
        }
    }
}
