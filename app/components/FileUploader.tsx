import { ButtonBase } from "@material-ui/core"
import { autobind } from "core-decorators"
import { observable } from "mobx"
import React from "react"
import { injectStore } from "../models/Store"
import { IStoreConsumerProps } from "../models/IProviderProps"

interface IFileUploaderProps extends Partial<IStoreConsumerProps> {
    dismiss: () => void
}

@injectStore
export class FileUploader extends React.Component<IFileUploaderProps> {
    @observable private isDragActive = false
    public render() {
        return (
            <div>
                <ButtonBase
                    style={{
                        textAlign: "center",
                        padding: "30px",
                        flexGrow: 1,
                        fontSize: "1.5rem",
                        color: "silver",
                        whiteSpace: "nowrap",
                        border: this.isDragActive
                            ? "2px dotted blue"
                            : "2px dotted silver",
                        width: "100%",
                    }}
                >
                    <div
                        onDragEnter={this.handleDragEnter}
                        onDragLeave={this.handleDragLeave}
                        onDragOver={this.handleDragOver}
                        onDrop={this.handleDrop}
                    >
                        Drop File Here
                    </div>
                </ButtonBase>
                <input
                    style={{
                        width: "100%",
                        border: "1px solid silver",
                        padding: "5px",
                        marginTop: "10px",
                    }}
                    type="file"
                    onChange={this.handleInputChange}
                />
            </div>
        )
    }
    @autobind
    private handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { files } = event.target
        if (!files) return
        this.handleUploadFiles(files)
    }
    @autobind
    private handleDragEnter() {
        this.isDragActive = true
    }
    @autobind
    private handleDragLeave() {
        this.isDragActive = false
    }
    @autobind
    private handleDragOver(event: React.DragEvent<HTMLDivElement>) {
        event.stopPropagation()
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
    }
    @autobind
    private handleDrop(event: React.DragEvent<HTMLDivElement>) {
        event.stopPropagation()
        event.preventDefault()
        const { files } = event.dataTransfer
        this.handleUploadFiles(files)
    }
    @autobind
    private handleUploadFiles(files: FileList) {
        if (files.length === 0) {
            return
        }
        if (files.length > 1) {
            alert("Uploading multiple files is not supported")
        }
        const file = files[0]
        const reader = new FileReader()
        reader.onload = (progEvent: FileReaderProgressEvent) => {
            const result = progEvent.target!.result
            if (this.props.store!.loadFileContent(result)) {
                this.props.dismiss()
            }
        }
        reader.readAsText(file)
    }
}
